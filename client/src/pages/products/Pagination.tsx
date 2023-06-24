import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './Pagination.scss'
import { usePagination } from './usePagination'
import PaginationProps from './PaginationProps'
import { DOTS } from './usePagination'

// god bless whom ever made this article
// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react

const Pagination = ({ currentPage = 2, totalCount = 100, siblingCount = 1, pageSize = 5 }: PaginationProps) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // handle it in redux toolkit
  const onPageChange = (page: any) => {
    console.log(page)
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  }

  return (
    <div className='pagination'>
      <button onClick={onPrevious} disabled={currentPage === 1} ><AiOutlineLeft /> </button>

      {paginationRange.map((pageNumber: any) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <button className='dots'>&#8230;</button>;
        }

        // Render our Page Pills
        return (
          <button onClick={() => onPageChange(pageNumber)} disabled={currentPage === pageNumber} >
            {pageNumber}
          </button>
        )
      })}

      <button onClick={onNext} disabled={currentPage === totalCount - 1} ><AiOutlineRight /> </button>
    </div>
  )
}

export default Pagination