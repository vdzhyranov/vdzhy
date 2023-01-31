import { CalendarIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
  fromDate: string
  toDate: string
}

export const DateRange: React.FC<Props> = ({ fromDate, toDate }) => {
  return (
    <dd className={'flex items-center text-sm text-gray-900'}>
      <CalendarIcon className={'mr-2 h-5 w-5 text-gray-600'} />
      <p className={'mr-1 text-gray-600'}>{`${fromDate} - ${
        toDate === 'current' ? 'Present' : toDate
      }`}</p>
    </dd>
  )
}
