import Image from 'next/image'
import React, { useEffect } from 'react'
import { useToggleState } from '../../hooks/useToggleState'

type Props = {
  height?: 'h-full' | 'h-screen'
}

export const Loader: React.FC<Props> = ({ height = 'h-screen' }) => {
  const [isLoaderVisible, showLoader] = useToggleState(false)

  useEffect(() => {
    const timer = setTimeout(showLoader, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [showLoader])

  return (
    <div className={`flex ${height} w-full items-center justify-center`}>
      {isLoaderVisible && (
        <div className={'relative h-20 w-20'}>
          <Image
            alt={'Loader'}
            src={'/images/loaderKGG.svg'}
            fill
            priority
            sizes={'(max-width: 1536px) 100%'}
          />
        </div>
      )}
    </div>
  )
}
