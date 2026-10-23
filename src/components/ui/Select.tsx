import {
  forwardRef,
  type ReactNode,
  type SelectHTMLAttributes,
} from 'react'

export type SelectOption = {
  value: string
  label: string
}

type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'children' | 'onChange'
> & {
  id: string
  label: string
  options: readonly SelectOption[]
  onChange: (value: string) => void
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  labelClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      id,
      label,
      options,
      onChange,
      leadingIcon,
      trailingIcon,
      labelClassName = '',
      className = '',
      ...selectProps
    },
    ref,
  ) {
    return (
      <div className="select-control">
        <label className={`select-label ${labelClassName}`.trim()} htmlFor={id}>
          {leadingIcon}
          <span>{label}</span>
        </label>
        <div className="select-field">
          <select
            {...selectProps}
            className={`select ${className}`.trim()}
            id={id}
            onChange={(event) => onChange(event.currentTarget.value)}
            ref={ref}
          >
            {options.map(({ value, label: optionLabel }) => (
              <option key={value} value={value}>
                {optionLabel}
              </option>
            ))}
          </select>
          {trailingIcon}
        </div>
      </div>
    )
  },
)
