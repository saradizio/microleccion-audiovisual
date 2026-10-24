import type { Translation } from '../i18n'
import { Link } from './ui/Link'

type SiteFooterProps = {
  copy: Translation
  isDesignSystem?: boolean
}

const footerLinks: {
  key: keyof Pick<
    Translation,
    'privacy' | 'legalNotice' | 'help' | 'contact' | 'designSystem'
  >
  href: string
}[] = [
  { key: 'contact', href: '#' },
  { key: 'privacy', href: '#' },
  { key: 'legalNotice', href: '#' },
  { key: 'help', href: '#' },
  { key: 'designSystem', href: `${import.meta.env.BASE_URL}#/sistema-de-diseno` },
]

export function SiteFooter({ copy, isDesignSystem = false }: SiteFooterProps) {
  return (
    <footer className="site-footer" id="contacto">
      <nav aria-label={copy.footerNavigation}>
        <ul>
          {footerLinks.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                isActive={key === 'designSystem' && isDesignSystem}
              >
                {copy[key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
