import React from 'react'

type Props = {
  name?: string
  rows: number
  description?: string
  value: string
  placeholder?: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<Props> = ({
  name,
  rows,
  description,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <div className={'mt-1 sm:col-span-2 sm:mt-0'}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className={
          'block w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm'
        }
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p className={'mt-2 text-sm text-gray-500'}>{description}</p>
    </div>
  )
}
