import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onClick: () => void
  title?: string
  disabled?: boolean
}>

export const CircleButton: React.FC<Props> = ({
  onClick,
  children,
  title,
  disabled,
}) => {
  return (
    <button
      className={`hover:text-kg-600  inline-flex items-center justify-center rounded-full border border-transparent p-2 duration-200 hover:bg-gray-100 focus:outline-none ${
        disabled &&
        'cursor-default border-gray-300 bg-gray-300 hover:bg-gray-300'
      }`}
      onClick={onClick}
      disabled={disabled || false}
      type={'button'}
    >
      {title}
      {children}
    </button>
  )
}
