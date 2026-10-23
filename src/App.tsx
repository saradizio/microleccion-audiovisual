import { useEffect, useState } from 'react'
import './App.css'
import { translations, type Language } from './i18n'
import { LessonNavigation } from './components/LessonNavigation'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader, type Theme } from './components/SiteHeader'
import { Transcript } from './components/Transcript'

const LESSON_NUMBER = 3
const SITE_NAME = 'Hola ELE'

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('es')
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.pageTitle
      .replace('{lesson}', copy.lesson)
      .replace('{lessonNumber}', String(LESSON_NUMBER))
      .replace('{lessonTitle}', copy.lessonTitle)
      .replace('{siteName}', SITE_NAME)
  }, [copy.lesson, copy.lessonTitle, copy.pageTitle, language])

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

      <SiteFooter copy={copy} />
    </div>
  )
}

export default App
