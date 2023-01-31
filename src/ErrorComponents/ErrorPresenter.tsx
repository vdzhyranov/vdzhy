import { useRouter } from 'next/router'
import React from 'react'
import { Title } from '../Title/Title'

type Props = {
  title: string
  message: string
  withOutReloadButton?: boolean
}

export const ErrorPresenter: React.FC<Props> = ({
  title,
  message,
  withOutReloadButton = false,
}) => {
  const { reload } = useRouter()

  return (
    <div
      className={
        'flex w-full flex-grow flex-col items-center px-4 sm:px-6 lg:px-8'
      }
    >
      <div className={'my-auto flex-shrink-0 py-12 text-center sm:py-14'}>
        <p className={'text-kg text-sm font-semibold uppercase tracking-wide'}>
          {'Error'}
        </p>
        <Title
          className={'mt-2 tracking-tight'}
          title={title}
          position={'center'}
          size={'ExtraLarge'}
          color={'gray-900'}
        />
        <p className={'mt-2 max-w-2xl text-base text-gray-500'}>{message}</p>
        {!withOutReloadButton && (
          <div className={'mt-6'}>
            <button
              type={'button'}
              onClick={reload}
              className={
                'bg-kg rounded-lg px-4 py-2 text-base font-medium text-white duration-500 hover:scale-105 hover:text-green-400'
              }
            >
              {'Reload'}
              <span aria-hidden={'true'}> &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
