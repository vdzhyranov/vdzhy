import React from 'react'

type Props = {
  errorMessage: string
}

export const FormikError: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div className={'pt-2 text-center text-xs text-red-600'}>
      {errorMessage}
    </div>
  )
}
