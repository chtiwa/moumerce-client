import { useState, useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import './Product.scss'
import { BsFillCartPlusFill } from 'react-icons/bs'
import ProductSkeleton from './ProductSkeleton'

const Product = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timout = setTimeout(() => {
      setIsLoading(isLoading => !isLoading)
    }, 1000)
    return () => clearTimeout(timout)
  }, [])

  const data = { title: "Blue sweatshirt", img1: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZnVsbCUyMGJvZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", img2: "https://images.unsplash.com/photo-1638656749922-9158fd414393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60", price: 20, oldPrice: 25, isNew: true }

  if (isLoading) {
    return <ProductSkeleton />
  }

  return (
    <div className='product'>
      <div className="img-wrapper">
        <img src={data.img1} alt="" className='img1' />
        <img src={data.img2} alt="" className='img2' />
        <span>
          <AiOutlineHeart />
        </span>
      </div>
      <div className="info">
        <span className="title">{data.title}</span>
        <span className="price">${data.price}</span>
        <button>
          <BsFillCartPlusFill />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default Product