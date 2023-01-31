import React, { PropsWithChildren } from 'react'
import { Empty } from '../../../../iris-expert/src/types/empty'

export const ContentWrapper: React.FC<PropsWithChildren<Empty>> = ({
  children,
}) => {
  return (
    <div
      className={'md:w-12/12 mx-auto my-6 pb-10 sm:w-full sm:px-4 2xl:w-11/12'}
    >
      {children}
    </div>
  )
}
