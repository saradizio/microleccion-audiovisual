import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type LinkProps = ComponentPropsWithoutRef<'a'> & {
  isActive?: boolean
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ className = '', isActive = false, ...props }, ref) {
    return (
      <a
        {...props}
        aria-current={isActive ? 'page' : props['aria-current']}
        className={`link ${className}`.trim()}
        ref={ref}
      />
    )
  },
)
