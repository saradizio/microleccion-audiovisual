import { useState } from 'react'
import { Icon } from './Icon'
import type { Language, Translation } from '../i18n'
import { Button } from './ui/Button'
import { Link } from './ui/Link'
import { Select } from './ui/Select'
import { HomePageLink } from './HomePageLink'

export type Theme = 'light' | 'dark'

type SiteHeaderProps = {
  theme: Theme
  language: Language
  copy: Translation
  onThemeChange: () => void
  onLanguageChange: (language: Language) => void
}

const languageOptions = ['es', 'en', 'it', 'ca'] as const

function isLanguage(value: string): value is Language {
  return languageOptions.some((language) => language === value)
}

function ThemeToggle({
  theme,
  copy,
  onChange,
}: {
  theme: Theme
  copy: Translation
  onChange: () => void
}) {
  const nextThemeLabel = theme === 'light' ? copy.darkMode : copy.lightMode

  return (
    <Button
      className="theme-toggle"
      variant="outline"
      type="button"
      role="switch"
      aria-label={copy.darkMode}
      aria-checked={theme === 'dark'}
      onClick={onChange}
    >
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
      <span>{nextThemeLabel}</span>
    </Button>
  )
}

function LanguageSelect({
  value,
  copy,
  onChange,
}: {
  value: Language
  copy: Translation
  onChange: (language: Language) => void
}) {
  return (
    <Select
      className="language-select"
      id="language-select"
      label={copy.language}
      labelClassName="language-label"
      leadingIcon={<Icon name="globe" />}
      trailingIcon={<Icon className="language-caret" name="chevron-down" />}
      value={value}
      options={languageOptions.map((language) => ({
        value: language,
        label: copy.languages[language],
      }))}
      onChange={(selectedLanguage) => {
        if (isLanguage(selectedLanguage)) {
          onChange(selectedLanguage)
        }
      }}
    />
  )
}

export function SiteHeader({
  theme,
  language,
  copy,
  onThemeChange,
  onLanguageChange,
}: SiteHeaderProps) {
  const [activeNavigationItem, setActiveNavigationItem] = useState('home')
  const navigationItems = [
    { id: 'home', label: copy.home, href: '#' },
    { id: 'lessons', label: copy.lessons, href: '#' },
    { id: 'exercises', label: copy.exercises, href: '#' },
  ]

  return (
    <header className="site-header">
      <HomePageLink homeLabel={copy.home} />

      <nav className="primary-navigation" aria-label={copy.mainNavigation}>
        <ul>
          {navigationItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                isActive={activeNavigationItem === id}
                onClick={() => setActiveNavigationItem(id)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-controls">
        <ThemeToggle
          theme={theme}
          copy={copy}
          onChange={onThemeChange}
        />
        <LanguageSelect
          value={language}
          copy={copy}
          onChange={onLanguageChange}
        />
      </div>
    </header>
  )
}

export type { Language }
