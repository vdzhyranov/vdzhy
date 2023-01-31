import { LockClosedIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {
  ButtonSize,
  ButtonColorStyle,
  mapButtonColorToClassName,
  mapButtonSizeToClassName,
} from '../Buttons/buttonStyles'

type Props = {
  disabled: boolean
  label: string
  isSubmitting?: boolean
  size?: ButtonSize
  color?: ButtonColorStyle
}

export const FormikButton: React.FC<Props> = ({
  disabled,
  label,
  isSubmitting,
  size = 'Big',
  color = 'Proceed Green',
}) => {
  const colorClassName = mapButtonColorToClassName(color)
  const sizeClassName = mapButtonSizeToClassName(size)

  return (
    <button
      type={'submit'}
      disabled={disabled}
      className={`relative flex w-full justify-center rounded-md font-medium focus:z-10 ${colorClassName} ${sizeClassName} ${
        disabled &&
        'cursor-default border-gray-300 bg-gray-300 hover:bg-gray-300/100'
      }`}
    >
      <span
        className={`absolute ${
          !isSubmitting && 'hidden'
        } inset-y-0 left-0 flex items-center pl-3`}
      >
        {isSubmitting ? (
          <span className={'flex h-3 w-3'}>
            <span
              className={
                'absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75'
              }
            />
            <span
              className={
                'relative inline-flex h-3 w-3 rounded-full bg-green-600'
              }
            />
          </span>
        ) : (
          <LockClosedIcon
            className={'h-5 w-5 text-green-500 group-hover:text-green-400'}
            aria-hidden={'true'}
          />
        )}
      </span>
      {label}
    </button>
  )
}
