import React, { PropsWithChildren } from 'react'
import { useToggleState } from '../../hooks/useToggleState'

type Props = PropsWithChildren<{
  title: string | JSX.Element[]
  position: string
  hide?: boolean
}>

export const TooltipWrapper: React.FC<Props> = ({
  children,
  title,
  position,
  hide = false,
}) => {
  const [showInfo, openInfo, closeInfo] = useToggleState(false)

  if (hide) {
    return <div>{children}</div>
  }

  return (
    <div className={'relative '}>
      {showInfo && (
        <div
          className={`absolute z-10 w-60 min-w-min max-w-xl rounded-md bg-gray-200 py-1 px-2 text-xs text-gray-800 ${position} border border-gray-300 shadow-md`}
        >
          {title}
        </div>
      )}

      <div onPointerLeave={closeInfo} onPointerEnter={openInfo}>
        {children}
      </div>
    </div>
  )
}
