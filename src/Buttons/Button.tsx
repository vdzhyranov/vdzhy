import React, { PropsWithChildren } from 'react'
import {
  ButtonColorStyle,
  ButtonSize,
  mapButtonColorToClassName,
  mapButtonSizeToClassName,
} from './buttonStyles'

type Props = PropsWithChildren<{
  onClick: () => void
  size?: ButtonSize
  color?: ButtonColorStyle
  title?: string
  disabled?: boolean
}>

export const Button: React.FC<Props> = ({
  size = 'Default',
  color = 'Default',
  onClick,
  children,
  title,
  disabled = false,
}) => {
  const sizeStyle = mapButtonSizeToClassName(size)

  const colorStyle = mapButtonColorToClassName(color)

  return (
    <button
      className={`inline-flex items-center rounded-md font-medium focus:z-10 ${colorStyle} ${sizeStyle} ${
        disabled &&
        'cursor-default border-gray-300 bg-gray-300 hover:bg-gray-300/100'
      }`}
      onClick={onClick}
      disabled={disabled}
      type={'button'}
    >
      {title}
      {children}
    </button>
  )
}
