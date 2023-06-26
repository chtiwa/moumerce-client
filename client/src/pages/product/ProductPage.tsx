import { useState } from 'react'
import './ProductPage.scss'
import { AiOutlineDown, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUp } from 'react-icons/ai'
import Products from '../../components/products/Products'

const ProductPage = () => {
  const data = {
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
    ],
    title: "Cyan Blue Sweatshirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo voluptas nulla voluptates qui praesentium iusto.",
    price: 45,
    oldPrice: 55
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="product-page">

      <div className="wrapper">
        <div className="img-wrapper">
          <div className="main-image">
            <img src={data.images[currentIndex]} alt="" />
          </div>
          <div className="secondary-images">
            {data.images.map((img, index) => (
              <img src={img} alt="" key={index} className={`${currentIndex === index ? "selected-image" : ""}`} onClick={() => setCurrentIndex(index)} />
            ))}
          </div>
        </div>

        <div className="details">
          <span className="title">{data.title} </span>
          <span className="description">{data.description} </span>
          <span className='price'>${data.price} </span>
          <div className="buttons-wrapper">
            <div className="amount-btns">
              <span>2</span>
              <div className="up-down-wrapper">
                <button><AiOutlineUp /> </button>
                <button><AiOutlineDown /> </button>
              </div>
            </div>
            <div className="inner">
              <button className="cart-button">
                <AiOutlineShoppingCart />
                <span>Add to cart</span>
              </button>
              <button className='wishlist-button'>
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="suggestions">
        <div className="header">
          Products that you might like :
        </div>
        <Products />
      </div>
    </div>
  )
}

export default ProductPage