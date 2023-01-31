import React, { useMemo } from 'react'
import { useToggleState } from '../../hooks/useToggleState'

type Props = {
  data: string | string[]
  maxSize: number
  withNumber?: boolean
  buttonStyles?: string
  itemStyle?: string
}

export const ShowMoreComponent: React.FC<Props> = ({
  data,
  maxSize,
  withNumber,
  buttonStyles = '',
  itemStyle = '',
}) => {
  const [showMore, , , flip] = useToggleState(false)

  const Button = useMemo(() => {
    return (
      data.length > maxSize && (
        <button
          onClick={flip}
          type={'button'}
          className={`text-kg-400 hover:text-kg-200 ml-1 ${buttonStyles}`}
        >
          {showMore ? 'hide' : 'see more'}
        </button>
      )
    )
  }, [buttonStyles, data.length, flip, maxSize, showMore])

  if (typeof data === 'string') {
    return (
      <div className={` ${!showMore ? 'line-clamp-3' : ''}`}>
        {data.slice(0, showMore ? data.length : maxSize)}
        {!showMore && data.length > maxSize && '...'}
        {Button}
      </div>
    )
  }

  const renderedList = data.slice(0, showMore ? data.length : maxSize)

  return (
    <>
      {renderedList.map((e: string, idx: number) => (
        <ol key={idx} className={itemStyle}>
          <p>{withNumber ? `${idx + 1}. ${e}` : e}</p>
        </ol>
      ))}
      {Button}
    </>
  )
}
