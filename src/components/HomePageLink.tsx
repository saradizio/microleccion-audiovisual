import homeLogo from '../assets/home-logo.svg?no-inline'
import { Link } from './ui/Link'

export function HomePageLink() {
  return (
    <Link
      aria-label="Hola ELE"
      className="brand"
      href={import.meta.env.BASE_URL}
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
