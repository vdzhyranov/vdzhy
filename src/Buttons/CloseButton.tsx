import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
  onClose: () => void
}

export const CloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={'absolute top-0 right-0 pt-4 pr-4 sm:block'}>
      <button
        type={'button'}
        className={
          'rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        }
        onClick={onClose}
      >
        <span className={'sr-only'}>{'Close'}</span>
        <XMarkIcon className={'h-6 w-6'} aria-hidden={'true'} />
      </button>
    </div>
  )
}
