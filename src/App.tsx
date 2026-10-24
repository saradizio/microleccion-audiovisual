import { useEffect, useState } from 'react'
import './App.css'
import { translations, type Language } from './i18n'
import { LessonNavigation } from './components/LessonNavigation'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader, type Theme } from './components/SiteHeader'
import { Transcript } from './components/Transcript'
import { DesignSystem } from './components/DesignSystem'

const LESSON_NUMBER = 3
const SITE_NAME = 'Hola ELE'
const DESIGN_SYSTEM_PATH = new URL(
  'sistema-de-diseno',
  `${window.location.origin}${import.meta.env.BASE_URL}`,
).pathname

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('es')
  const [isDesignSystem, setIsDesignSystem] = useState(
    window.location.pathname === DESIGN_SYSTEM_PATH,
  )
  const copy = translations[language]

  useEffect(() => {
    const updatePage = () =>
      setIsDesignSystem(window.location.pathname === DESIGN_SYSTEM_PATH)
    window.addEventListener('popstate', updatePage)
    return () => window.removeEventListener('popstate', updatePage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = isDesignSystem
      ? `${copy.designSystem} | ${SITE_NAME}`
      : copy.pageTitle
          .replace('{lesson}', copy.lesson)
          .replace('{lessonNumber}', String(LESSON_NUMBER))
          .replace('{lessonTitle}', copy.lessonTitle)
          .replace('{siteName}', SITE_NAME)
  }, [copy.designSystem, copy.lesson, copy.lessonTitle, copy.pageTitle, isDesignSystem, language])

  return (
    <div className="app" data-theme={theme}>
      <SiteHeader
        theme={theme}
        language={language}
        copy={copy}
        onThemeChange={() =>
          setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light',
          )
        }
        onLanguageChange={setLanguage}
      />

      {isDesignSystem ? (
        <DesignSystem
          copy={copy.designSystemPage}
          language={language}
          languageName={copy.languages[language]}
        />
      ) : (
        <main className="main-content" id="inicio">
          <article className="lesson" aria-labelledby="lesson-title">
          <header className="lesson-heading" id="lecciones">
            <p
              className="lesson-eyebrow"
              aria-label={`${copy.level} A1, ${copy.lesson} ${LESSON_NUMBER}`}
            >
              <span>{copy.level} A1</span>
              <span aria-hidden="true">·</span>
              <span>{copy.lesson} {LESSON_NUMBER}</span>
            </p>
            <h1 id="lesson-title">{copy.lessonTitle}</h1>
          </header>

          <section
            className="video-section"
            aria-label={copy.videoRegion}
          >
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/orSvFzQHOb4"
                title={copy.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>

          <Transcript
            id="lesson-3-transcript"
            transcript={copy.transcript}
            copy={copy}
          />
          <LessonNavigation copy={copy} />
          </article>
        </main>
      )}

      <SiteFooter copy={copy} isDesignSystem={isDesignSystem} />
    </div>
  )
}

export default App
