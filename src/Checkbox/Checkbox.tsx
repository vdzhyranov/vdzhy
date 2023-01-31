import React, { PropsWithChildren } from 'react'

type Props = {
  checked: boolean
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  title?: string
}

export const Checkbox: React.FC<PropsWithChildren<Props>> = ({
  checked,
  disabled = false,
  onChange,
  title,
  children,
}) => {
  return (
    <label className={'flex items-center'} htmlFor={title}>
      <input
        aria-describedby={'offers-description'}
        title={title}
        id={title}
        type={'checkbox'}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={
          'mr-2 h-4 w-4 cursor-pointer rounded border-gray-300 text-green-400 focus:ring-transparent'
        }
      />
      {title && <p>{title}</p>}
      {children}
    </label>
  )
}
