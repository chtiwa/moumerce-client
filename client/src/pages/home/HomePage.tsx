import './HomePage.scss'
import { useState, useEffect } from 'react'
import Hero from './Hero'
import MenWomen from './MenWomen'
import Categories from './Categories'
import Featured from './Featured'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

const HomePage = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (counter < 2) {
        setCounter(counter => counter + 1)
      } else {
        setCounter(0)
      }
    }, 15000)
    return () => clearInterval(timeInterval)
  }, [counter])

  return (
    <div className='home'>
      <Hero counter={counter} setCounter={setCounter} />
      <MenWomen />
      <Categories />
      <Featured />
      <Link to="/products" className="link-button">
        <button>
          <span>View all</span>
          <AiOutlineRight />
        </button>
      </Link>
    </div >
  )
}

export default HomePage