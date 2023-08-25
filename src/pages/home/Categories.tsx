import { Link } from "react-router-dom"
import "./Categories.scss"
const Categories = () => {
  const data = [
    {
      title: "Shirts",
      image:
        "https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Pants",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "T-shirts",
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Watches",
      image:
        "https://images.unsplash.com/photo-1628701070169-6cce6b9ce50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdhdGNoZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Glasses",
      image:
        "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGdsYXNzZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Shoes",
      image:
        "https://images.unsplash.com/photo-1642978601217-ef7563cabcb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXMlMjBjbGFzc2ljfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Coats",
      image:
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hdHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Heels",
      image:
        "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=1500&q=60"
    },
    {
      title: "Hats",
      image:
        "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60"
    }
  ]

  return (
    <div className="categories">
      <div className="heading">
        <h2>SHOP BY CATEGORY</h2>
        <hr />
        <p>Countless choices</p>
      </div>
      <div className="wrapper">
        <div className="col">
          <Link to={`/products?type=${data[0].title}`} className="row">
            <img src={data[0].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[1].title}`} className="row">
            <img src={data[1].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[7].title}`} className="row">
            <img src={data[7].image} alt="" />
          </Link>
        </div>
        <div className="col col-l">
          <Link to={`/products?type=${data[2].title}`} className="row">
            <img src={data[2].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[8].title}`} className="row">
            <img src={data[8].image} alt="" />
          </Link>
        </div>
        <div className="col col-l">
          <Link to={`/products?type=${data[3].title}`} className="row">
            <img src={data[3].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[4].title}`} className="row">
            <img src={data[4].image} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link to={`/products?type=${data[6].title}`} className="row">
            <img src={data[6].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[5].title}`} className="row">
            <img src={data[5].image} alt="" />
          </Link>
          <Link to={`/products?type=${data[9].title}`} className="row">
            <img src={data[9].image} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
