import React from 'react'

type TitleType = 'Small' | 'Default' | 'Large' | 'ExtraLarge'

type Props = {
  title: string
  id?: string
  size?: TitleType
  color?: string
  className?: string
  position?: 'left' | 'center' | 'right'
}

export const Title: React.FC<Props> = ({
  title,
  id,
  size = 'Default',
  color = 'gray-600',
  className,
  position = 'left',
}) => {
  return (() => {
    switch (size) {
      case 'Small':
        return (
          <h4
            id={id}
            className={`w-full py-2 text-${position} ${className} text-sm font-medium text-${color}`}
          >
            {title}
          </h4>
        )
      case 'Default':
        return (
          <h3
            id={id}
            className={`w-full py-2 text-${position} ${className} text-lg font-semibold text-${color}`}
          >
            {title}
          </h3>
        )
      case 'Large':
        return (
          <h2
            id={id}
            className={`w-full py-2 text-${position} ${className} text-xl font-bold text-${color}`}
          >
            {title}
          </h2>
        )
      case 'ExtraLarge':
        return (
          <h1
            id={id}
            className={`w-full py-2 text-${position} ${className} text-3xl font-bold text-${color}`}
          >
            {title}
          </h1>
        )
      default:
        return <div />
    }
  })()
}
