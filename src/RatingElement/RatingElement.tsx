import { StarIcon } from '@heroicons/react/24/solid'
import React, { useCallback, useState } from 'react'

type Props = {
  rating: number
  size: 6 | 9
  handleChange?: (rating: number) => void
}

type RatingProps = {
  index: number
  size: 6 | 9
  color: (index: number) => void
  onHoverRating: (index: number) => void
  offHoverRating: () => void
  handleChange: (rating: number) => void
}

const StarRatingElement: React.FC<RatingProps> = ({
  index,
  size,
  color,
  onHoverRating,
  offHoverRating,
  handleChange,
}) => {
  const handleChangeRating = useCallback(() => {
    handleChange(index)
  }, [handleChange, index])

  const handleOnHoverRating = useCallback(() => {
    onHoverRating(index)
  }, [onHoverRating, index])

  return (
    <StarIcon
      onClick={handleChangeRating}
      className={`h-${size} w-${size} inline cursor-pointer ${color(index)}`}
      onMouseEnter={handleOnHoverRating}
      onMouseLeave={offHoverRating}
    />
  )
}

export const RatingElement: React.FC<Props> = ({
  rating,
  size,
  handleChange,
}) => {
  const [hoverRating, setHoverRating] = useState(0)
  const setStart = useCallback(
    (idx: number) => {
      if (!handleChange) {
        return
      }

      handleChange(idx + 1)
    },
    [handleChange]
  )

  const getColor = useCallback(
    (idx: number) => {
      if (hoverRating > idx) {
        return 'text-yellow-500'
      }

      if (!hoverRating && rating > idx) {
        return 'text-yellow-500'
      }

      return 'text-gray-400'
    },
    [hoverRating, rating]
  )

  const onHoverRating = useCallback(
    (idx: number) => {
      if (!handleChange) {
        return
      }

      setHoverRating(idx + 1)
    },
    [handleChange]
  )

  const offHoverRating = useCallback(() => {
    if (!handleChange) {
      return
    }

    setHoverRating(0)
  }, [handleChange])

  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <StarRatingElement
              key={idx}
              color={getColor}
              index={idx}
              size={size}
              handleChange={setStart}
              onHoverRating={onHoverRating}
              offHoverRating={offHoverRating}
            />
          )
        })}
    </>
  )
}
