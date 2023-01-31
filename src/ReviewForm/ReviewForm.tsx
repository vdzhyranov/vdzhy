import React, { useCallback, useState } from 'react'
import { Button } from '../Buttons/Button'
import { Textarea } from '../Inputs/Textarea'
import { RatingElement } from '../RatingElement/RatingElement'

type Props = {
  showCancelButton?: boolean
  onClickCancelButton?: () => void
  onClickSendReview: (args: { text: string; rating: number }) => void
}

export const ReviewForm: React.FC<Props> = ({
  onClickSendReview,
  onClickCancelButton,
  showCancelButton = false,
}) => {
  const [{ text, rating }, setReviewInput] = useState({
    rating: 0,
    text: '',
  })

  const handleChangeRating = useCallback((rate: number) => {
    setReviewInput((r) => ({ ...r, rating: rate }))
  }, [])

  const handleChangeText = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReviewInput((r) => ({ ...r, text: event.target.value }))
    },
    [],
  )

  const resetReviewInput = useCallback(() => {
    setReviewInput({
      text: '',
      rating: 0,
    })
  }, [])

  const handleClickOnCancelButton = useCallback(() => {
    if (onClickCancelButton) {
      onClickCancelButton()
    }
    resetReviewInput()
  }, [onClickCancelButton, resetReviewInput])

  const handleClickSendReviewWithReset = useCallback(() => {
    onClickSendReview({ text, rating })
    resetReviewInput()
  }, [resetReviewInput, onClickSendReview, rating, text])

  return (
    <div className={'mx-auto w-full max-w-xl pb-4'} data-cy={'form'}>
      <div className={'flex justify-center py-3'} data-cy={'rating'}>
        <RatingElement
          rating={rating}
          size={9}
          handleChange={handleChangeRating}
        />
      </div>
      <Textarea
        value={text}
        rows={6}
        handleChange={handleChangeText}
        placeholder={'Write your review here'}
      />
      <div className={'flex items-center justify-end gap-x-2'}>
        <div data-cy={'saveReview'}>
          <Button
            title={'Send review'}
            onClick={handleClickSendReviewWithReset}
            disabled={!text.length}
          />
        </div>

        {showCancelButton && (
          <div data-cy={'cancelReview'}>
            <Button color={'Alert Red'} onClick={handleClickOnCancelButton}>
              <p className={'text-md'}>{'Cancel'}</p>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
