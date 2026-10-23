export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'globe'
  | 'moon'
  | 'sun'
  | 'transcript-hide'
  | 'transcript-show'

type IconProps = {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const classes = className ? `icon ${className}` : 'icon'

  return (
    <svg
      aria-hidden="true"
      className={classes}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {name === 'arrow-left' && (
        <>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </>
      )}
      {name === 'arrow-right' && (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
      {name === 'chevron-down' && <path d="m6 9 6 6 6-6" />}
      {name === 'globe' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </>
      )}
      {name === 'moon' && (
        <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.7 8.7 0 1 0 20.2 15.4Z" />
      )}
      {name === 'sun' && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m4.93 19.07 1.41-1.41" />
          <path d="m17.66 6.34 1.41-1.41" />
        </>
      )}
      {name === 'transcript-hide' && (
        <path d="m6 15 6-6 6 6" />
      )}
      {name === 'transcript-show' && (
        <path d="m6 9 6 6 6-6" />
      )}
    </svg>
  )
}
