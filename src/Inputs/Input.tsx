import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
  value: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  isValid?: boolean
  errorDescription?: string
  longInput?: boolean
  id: string
  description?: string
}

export const Input: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
  isValid = true,
  errorDescription,
  type = 'text',
  longInput,
  id,
  description,
}) => {
  return (
    <div
      className={longInput ? 'w-full' : 'relative mt-1 sm:col-span-2 sm:mt-0'}
    >
      <input
        type={type}
        name={id}
        id={id}
        className={
          longInput
            ? `focus:border-kg focus:ring-kg block w-full rounded-md border-gray-300 shadow-sm sm:text-sm ${
                !isValid &&
                'border-red-700 focus:border-red-700 focus:ring-red-700'
              }`
            : `block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                !isValid &&
                'border-red-700 focus:border-red-700 focus:ring-red-700'
              }`
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!!description && (
        <p className={'mt-2 text-sm text-gray-500'}>{description}</p>
      )}
      {!isValid && (
        <div className={'absolute mt-1 text-xs text-red-700'}>
          {errorDescription}
        </div>
      )}
    </div>
  )
}
