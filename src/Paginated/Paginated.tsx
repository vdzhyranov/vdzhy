import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

type Props<D> = {
  items: D[]
  itemsPerPage: number
  children: (item: D, idx: number) => React.ReactNode
}

export const Paginated = <D extends Record<string, unknown>>({
  items,
  itemsPerPage,
  children,
}: Props<D>) => {
  const [currentItems, setCurrentItems] = useState(items)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, items, itemsPerPage, setCurrentItems])

  const handlePageClick = useCallback(
    ({ selected }: { selected: number }) => {
      const newOffset = (selected * itemsPerPage) % items.length
      setItemOffset(newOffset)
    },
    [items.length, itemsPerPage],
  )

  return (
    <div>
      {currentItems.map(children)}
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel={'...'}
          nextLabel={<ArrowRightIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<ArrowLeftIcon />}
          className={'mx-auto my-2 flex w-min items-center justify-between'}
          pageClassName={'flex items-center justify-center w-10 h-10'}
          activeClassName={'bg-kg-500 text-white'}
          nextClassName={'bg-kg-200 text-white w-10 h-10 p-2'}
          previousClassName={'bg-kg-200 text-white w-10 h-10 p-2'}
          disabledClassName={'hidden'}
        />
      )}
    </div>
  )
}
