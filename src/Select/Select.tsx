import { Listbox, Transition } from '@headlessui/react'
import { PropsOf } from '@headlessui/react/dist/types'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useCallback, useMemo, useState } from 'react'
import { notifyNever } from '../../utils/notifyNever'
import { SearchBar } from '../SearchBar/SearchBar'

type Type = 'Default' | 'BorderedLess'

export type SelectProps<D extends { title: string } | string> = {
  onSelectedChanged: (arg: D) => void
  list: D[]
  selected: D | undefined
  styleForSelected?: string
  type?: Type
  disabled?: boolean
  maxHeightOptions?: string
  withSearch?: boolean
}

export const Select = <D extends { title: string } | string>({
  onSelectedChanged,
  list,
  selected,
  type = 'Default',
  styleForSelected = '',
  disabled,
  maxHeightOptions = 'max-h-60',
  withSearch = false,
}: SelectProps<D>) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleOnChangeStyle = useCallback(
    ({ active }: PropsOf<React.ElementType>) =>
      `relative cursor-default select-none py-2 px-4 ${
        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
      }`,
    [],
  )

  const filteredList = useMemo(() => {
    if (searchTerm === '') {
      return list
    }

    return list.filter((item) =>
      (typeof item === 'string' ? item : item.title)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    )
  }, [list, searchTerm])

  const className = (() => {
    switch (type) {
      case 'Default':
        return {
          input:
            'relative w-full flex justify-between items-center cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
          option: `z-20 mt-1 w-full overflow-auto  focus:outline-none text-xs ${maxHeightOptions}`,
        }
      case 'BorderedLess':
        return {
          input: `relative w-full py-1 flex justify-between items-center cursor-pointer bg-white pl-3 pr-1 text-xs shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ${styleForSelected}`,
          option: `z-20 mt-1 w-full overflow-auto  focus:outline-none text-xs ${maxHeightOptions}`,
        }
      default:
        notifyNever(type)

        return { input: '', option: '' }
    }
  })()

  const selectedOption = (() => {
    switch (typeof selected) {
      case 'string':
        return selected
      case 'object':
        return selected.title
      case 'undefined':
      default:
        return 'Select an option'
    }
  })()

  return (
    <Listbox
      value={selected}
      onChange={onSelectedChanged}
      disabled={disabled || false}
    >
      <div className={'relative'}>
        <Listbox.Button
          className={`${className.input} ${disabled && 'cursor-default'}`}
        >
          <div className={'block truncate'}>
            <p className={'text-center'}>{selectedOption}</p>
            {!disabled && (
              <div
                className={
                  'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
                }
              >
                <ChevronDownIcon
                  className={'ml-1 h-3 w-3 text-gray-400'}
                  aria-hidden={'true'}
                />
              </div>
            )}
          </div>
        </Listbox.Button>

        <Transition
          as={'div'}
          leave={'transition ease-in duration-100'}
          leaveFrom={'opacity-100'}
          leaveTo={'opacity-0'}
        >
          <Listbox.Options
            className={'absolute z-30 mt-1 w-full rounded-md border bg-white'}
          >
            {withSearch && (
              <div className={' -mt-1 mb-1 rounded-t-md border-b'}>
                <SearchBar
                  value={searchTerm}
                  type={'BorderLess'}
                  onValueChanged={setSearchTerm}
                />
              </div>
            )}
            <Listbox.Options className={className.option}>
              {filteredList.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={handleOnChangeStyle}
                  value={item}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {typeof item === 'string' ? item : item.title}
                      </span>
                      {active && (
                        <span
                          className={
                            'inset-y-0 left-0 flex items-start text-amber-600'
                          }
                        />
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
