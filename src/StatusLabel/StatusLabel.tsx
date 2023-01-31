import React from 'react'

type Props = {
  color: string
  status: string
}

export const StatusLabel: React.FC<Props> = ({ color, status }) => {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-${color}-100 text-${color}-800`}
    >
      {status}
    </span>
  )
}
