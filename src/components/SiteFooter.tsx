import type { Translation } from '../i18n'
import { Link } from './ui/Link'

type SiteFooterProps = {
  copy: Translation
}

const footerLinks: {
  key: keyof Pick<Translation, 'privacy' | 'legalNotice' | 'help' | 'contact'>
  href: string
}[] = [
  { key: 'contact', href: '#' },
  { key: 'privacy', href: '#' },
  { key: 'legalNotice', href: '#' },
  { key: 'help', href: '#' },
]

export function SiteFooter({ copy }: SiteFooterProps) {
  return (
    <footer className="site-footer" id="contacto">
      <nav aria-label={copy.footerNavigation}>
        <ul>
          {footerLinks.map(({ key, href }) => (
            <li key={key}>
              <Link href={href}>{copy[key]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
