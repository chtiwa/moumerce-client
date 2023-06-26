import { useState } from 'react'
import { AiOutlineDown, AiOutlineFilter, AiOutlineUp } from 'react-icons/ai'
import './Filters.scss'

const Filters = () => {
  const [isFiltersActive, setIsFiltersActive] = useState(false)
  const [isSelectActive, setIsSelectActive] = useState(false)
  const [sortyBy, setSortBy] = useState("")
  // const [min, setMin] = useState(0)
  const min = 0
  const [max, setMax] = useState(1000)

  const items = ["A to Z", "Z to A", "Low to high", "High to low"]

  const handleClickItem = (item: string) => {
    setSortBy(item)
    setIsSelectActive(false)
  }

  const handleRangeChange = (e: any) => {
    setMax(e.target.value)
  }




  return (
    <div className='filters'>
      <div className="top">
        <div className="filter-toggle" onClick={() => setIsFiltersActive(isFiltersActive => !isFiltersActive)}>
          <AiOutlineFilter />
          <span>
            Filter
          </span>
        </div>

        <div className="list-wrapper">
          <div className="title" onClick={() => setIsSelectActive(isSelectActive => !isSelectActive)} >
            <span>{sortyBy === "" ? "Sort by : " : sortyBy}</span>
            {isSelectActive ? (
              <AiOutlineUp />
            ) : (
              <AiOutlineDown />
            )}
          </div>
          <ul className={`list ${isSelectActive ? 'list-active' : ''}`} >
            {items.map((item, index) => (
              <li className={`item ${item === sortyBy ? "item-active" : ""} `} key={index} onClick={() => handleClickItem(item)} > {item} </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${isFiltersActive ? "show-filters" : "hide-filters"}`}>
        <div className="col">
          <div className="heading">
            <span>Category</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>Accessories</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Blouses</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Shirts</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Shoes</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Size</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>XS</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>S</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>M</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>L</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>XL</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Composition</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>polyster</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Cotton</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Style</span>
            <hr />
          </div>
          <ul className="filters-list">
            <li className="item">
              <input type="checkbox" />
              <span>Casual</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Classy</span>
            </li>
            <li className="item">
              <input type="checkbox" />
              <span>Streetwear</span>
            </li>
          </ul>
        </div>

        <div className="col">
          <div className="heading">
            <span>Price</span>
            <hr />
          </div>
          <div className="details">
            <span>{min} </span>
            <input type="range" min={0} max={1000} onChange={handleRangeChange} className="slider" />
            <span>{max} </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Filters