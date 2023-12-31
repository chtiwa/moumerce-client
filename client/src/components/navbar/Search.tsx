import { useState, useEffect, useRef } from 'react'
import './Search.scss'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { closeSearch } from '../../features/searchSlice'

const Search = () => {
  const dispatch = useAppDispatch()
  const { isSearchOpen } = useAppSelector(state => state.search)
  const [search, setSearch] = useState()
  const componentRef = useRef(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const handleEscapeKey = (e: any) => {
      if (e.key === 'Escape') {
        dispatch(closeSearch())
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <div className={`${isSearchOpen ? 'show-search' : 'hide-search'}`}>
      <div className='close-icon' onClick={() => {
        dispatch(closeSearch())
      }}>
        <AiOutlineClose />
      </div>
      <form onSubmit={handleSubmit} ref={componentRef} >

        <div className="form-control" >
          <input type="text" name='search' value={search || ''} onChange={handleChange} placeholder='search for products' />
          <button>
            <AiOutlineSearch />
          </button>
          <ul className="list">
            <li className="item">Hats</li>
            <li className="item">Shoes</li>
            <li className="item">Blue t-shirt</li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default Search