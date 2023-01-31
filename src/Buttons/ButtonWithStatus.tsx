import React, { useCallback, useState } from 'react'

type ButtonState = {
  prepare: string
  progress: string
  complete: string
}

type SendingState = keyof ButtonState

type Props = {
  onClick: () => Promise<unknown> | void
  buttonTitles: ButtonState
  buttonStyles: string
  disabled?: boolean
}

type PropsSvgCircleLoader = {
  className?: string
}

export const SvgCircleLoader: React.FC<PropsSvgCircleLoader> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
    >
      <circle
        className={'opacity-25'}
        cx={'12'}
        cy={'12'}
        r={'10'}
        stroke={'currentColor'}
        strokeWidth={'4'}
      />
      <path
        className={'opacity-75'}
        fill={'currentColor'}
        d={
          'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        }
      />
    </svg>
  )
}

export const ButtonWithStatus: React.FC<Props> = ({
  onClick,
  buttonTitles,
  buttonStyles,
  disabled,
}) => {
  const [requestingState, setRequestingState] =
    useState<SendingState>('prepare')

  const handleSendRequest = useCallback(async () => {
    setRequestingState('progress')

    await onClick()

    setRequestingState('complete')
  }, [onClick])

  const requestingStateLabel = buttonTitles[requestingState]

  return (
    <button
      type={'button'}
      disabled={disabled}
      className={`border-kg bg-kg hover:bg-kg/90 flex cursor-pointer items-center justify-center rounded border p-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-500 ${buttonStyles}`}
      onClick={handleSendRequest}
    >
      {requestingStateLabel}
      {requestingState === 'progress' && (
        <SvgCircleLoader className={'ml-2 h-5 w-5 animate-spin text-white'} />
      )}
    </button>
  )
}
