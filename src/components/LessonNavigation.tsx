import type { Translation } from '../i18n'
import { Icon } from './Icon'
import { Link } from './ui/Link'

type LessonNavigationProps = {
  copy: Translation
}

export function LessonNavigation({ copy }: LessonNavigationProps) {
  const lessonLinks = [
    {
      direction: copy.previousLesson,
      title: copy.previousLessonTitle,
      href: '#',
      className: 'lesson-link previous-lesson',
      icon: 'arrow-left' as const
    },
    {
      direction: copy.nextLesson,
      title: copy.nextLessonTitle,
      href: '#',
      className: 'lesson-link next-lesson',
      icon: 'arrow-right' as const
    },
  ]

  return (
    <nav className="lesson-navigation" aria-label={copy.lessonNavigation}>
      {lessonLinks.map(
        ({ direction, title, href, className, icon }) => (
          <Link className={className} href={href} key={direction}>
            <span className="lesson-link-heading">
              <Icon name={icon} />
              <span className="lesson-link-direction">{direction}</span>
            </span>
            <span className="lesson-link-title">{title}</span>
          </Link>
        ),
      )}
    </nav>
  )
}
