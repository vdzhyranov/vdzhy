import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useToggleState } from '../../hooks/useToggleState'
import { Button } from '../Buttons/Button'

type Props = {
  link?: string
  text: string
  mobileText: string
}

export const InfoLine: React.FC<Props> = ({ link, text, mobileText }) => {
  const [showInfo, , setHideInfo] = useToggleState(true)

  if (!showInfo) {
    return null
  }

  return (
    <div className={'relative bg-indigo-600'}>
      <div className={'mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8'}>
        <div className={'pr-16 sm:px-16 sm:text-center'}>
          <p className={'font-medium text-white'}>
            <span className={'md:hidden'}>{mobileText}</span>
            <span className={'hidden md:inline'}>{text}</span>
            {link && (
              <span className={'block sm:ml-2 sm:inline-block'}>
                <a href={link} className={'font-bold text-white underline'}>
                  {'Learn more '}
                  <span aria-hidden={'true'}>&rarr;</span>
                </a>
              </span>
            )}
          </p>
        </div>
        <div
          className={
            'absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2'
          }
        >
          <Button size={'Small'} color={'Transparent'} onClick={setHideInfo}>
            <XMarkIcon className={'h-6 w-6 text-white'} aria-hidden={'true'} />
          </Button>
        </div>
      </div>
    </div>
  )
}
