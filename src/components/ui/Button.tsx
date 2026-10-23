import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'outline'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className = '', variant = 'primary', ...props },
    ref,
  ) {
    return (
      <button
        {...props}
        className={`button button--${variant} ${className}`.trim()}
        ref={ref}
      />
    )
  },
)
