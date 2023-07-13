import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './Pagination.scss'
import { usePagination } from './usePagination'
import { DOTS } from './usePagination'

// https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react

type InternalProps = {
  currentPage: number
  totalPages: number
  siblingCount: number
  pageSize: number
}

interface IPaginationProps {
  info: InternalProps
  setInfo: (arg0: any) => void
}

const Pagination = ({ info, setInfo }: IPaginationProps) => {
  const paginationRange: any = usePagination({ ...info })

  if (info.currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onPageChange = (page: any) => {
    window.scrollTo({ top: 0 })
    console.log('scroll to top')
    setInfo((prevInfo: any) => {
      let updatedInfo = { ...prevInfo, currentPage: page }
      return updatedInfo
    })
  }

  const onNext = () => {
    onPageChange(info.currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(info.currentPage - 1)
  }

  return (
    <div className='pagination'>
      <button onClick={onPrevious} disabled={info.currentPage === 1} ><AiOutlineLeft /> </button>

      {paginationRange.map((pageNumber: any) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <button className='dots' key={pageNumber}>&#8230</button>
        }

        // Render our Page Pills
        return (
          <button onClick={() => onPageChange(pageNumber)} disabled={info.currentPage === pageNumber} key={pageNumber} >
            {pageNumber}
          </button>
        )
      })}

      <button onClick={onNext} disabled={info.currentPage === info.totalPages} ><AiOutlineRight /> </button>
    </div>
  )
}

export default Pagination