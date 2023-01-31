import React, { PropsWithChildren } from 'react'
import { Title } from '../Title/Title'

type TextBlockProps = PropsWithChildren<{
  title: string
  text?: string
}>

export const TextBlock: React.FC<TextBlockProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className={'pb-2'} data-cy={title.split(' ').join('')}>
      <Title title={title} size={'Small'} />
      {text && <p className={'text-sm'}>{text}</p>}
      {children}
    </div>
  )
}
