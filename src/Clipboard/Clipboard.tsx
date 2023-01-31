import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../Buttons/Button'

type Props = {
  href: string
  title: string
  prefix?: 'mailto:' | 'tel:'
  hideLink?: boolean
}

export const Clipboard: React.FC<Props> = ({
  href,
  title,
  prefix,
  hideLink = false,
}) => {
  const [isCopyBoardIconActive, setCopyBoardIconActive] = useState(false)

  const hideActiveCopyBoardIcon = useCallback(() => {
    setTimeout(() => setCopyBoardIconActive(false), 2000)
  }, [])

  const handleCopyEmailToClipboard = useCallback(() => {
    navigator.clipboard.writeText(href)
    setCopyBoardIconActive(true)
    hideActiveCopyBoardIcon()
  }, [hideActiveCopyBoardIcon, href])

  return (
    <div
      className={'flex select-none items-center pr-2 font-medium text-gray-500'}
    >
      {!hideLink && (
        <div className={'text-kg mr-2 text-sm hover:text-blue-600'}>
          <Link href={`${prefix ?? ''}${href}`}>{title}</Link>
        </div>
      )}
      <Button
        size={'Small'}
        color={'White'}
        onClick={handleCopyEmailToClipboard}
      >
        <div className={'flex items-center'}>
          {isCopyBoardIconActive ? (
            <ClipboardDocumentCheckIcon className={'h-5 w-5 text-green-500'} />
          ) : (
            <ClipboardDocumentIcon
              className={'text-gray h-5 w-5 hover:text-gray-700 '}
            />
          )}
          {hideLink && <span className={'ml-2'}>{title}</span>}
        </div>
      </Button>
      {!hideLink && (
        <div
          className={'text-kg ml-2 w-48 truncate text-sm hover:text-blue-600'}
        >
          <Link href={`${prefix ?? ''}${href}`}>{title}</Link>
        </div>
      )}
    </div>
  )
}
