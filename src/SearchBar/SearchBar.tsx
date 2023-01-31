import React, { useCallback } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '../Buttons/Button'

type Props = {
  value: string
  onValueChanged: (value: string) => void
  title?: string
  type?: 'Default' | 'BorderLess'
  withResetButton?: boolean
}

export const SearchBar: React.FC<Props> = ({
  value,
  onValueChanged,
  title,
  type = 'Default',
  withResetButton = false,
}) => {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onValueChanged(event.target.value),
    [onValueChanged],
  )
  const style = (() => {
    switch (type) {
      case 'Default':
        return 'block w-full rounded-md border-gray-300 pl-10 focus:border-kg focus:ring-kg sm:text-sm'
      case 'BorderLess':
        return 'block w-full border-none pl-10 text-xs'
      default:
        return ''
    }
  })()

  const handleResetSearchTerm = useCallback(() => {
    onValueChanged('')
  }, [onValueChanged])

  return (
    <div>
      {!!title && (
        <label
          htmlFor={'email'}
          className={'block text-sm font-medium text-gray-700'}
        >
          {title}
        </label>
      )}
      <div className={'flex rounded-md'}>
        <div
          className={'relative flex flex-grow items-center focus-within:z-10'}
        >
          <div
            className={
              'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
            }
          >
            <MagnifyingGlassIcon
              className={'h-4 w-4 text-gray-400'}
              aria-hidden={'true'}
            />
          </div>
          <input
            type={'text'}
            name={'search'}
            id={'search'}
            value={value}
            autoComplete={'off'}
            placeholder={'Search'}
            onChange={handleInputChange}
            className={style}
          />
          {withResetButton && (
            <div className={'ml-1 w-fit'}>
              <Button
                color={'White'}
                size={'Small'}
                onClick={handleResetSearchTerm}
              >
                <XMarkIcon className={'w-4'} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
