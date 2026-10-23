import homeLogo from '../assets/home-logo.svg?no-inline'
import { Link } from './ui/Link'

type HomePageLinkProps = {
  homeLabel: string
}

export function HomePageLink({ homeLabel }: HomePageLinkProps) {
  return (
    <Link
      aria-label={`Hola ELE — ${homeLabel}`}
      className="brand"
      href="#"
      isActive={false}
    >
      <svg
        aria-hidden="true"
        className="home-logo"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <use href={`${homeLogo}#home-logo`} />
      </svg>
      <span>Hola ELE</span>
    </Link>
  )
}
