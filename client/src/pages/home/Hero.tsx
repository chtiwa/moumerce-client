import './Hero.scss'

interface HeroProps {
  counter: number
  setCounter: (counter: number) => void
}

const Hero = ({ counter, setCounter }: HeroProps) => {
  const data = [
    { imageUrl: "https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1500&q=60", primaryText: "Welcome to Your Fashion Oasis", secondaryText: "Fashion & Style", description: "Step into a world of style and self-expression with our premier online fashion boutique" },
    { imageUrl: "https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGZhc2hpb258ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1500&q=60", primaryText: "Unlock the secrets of effortless style", secondaryText: "Unleash Your Inner Fashionista", description: "Unlock the secrets of effortless style with our curated selection of fashion-forward pieces" },
    { imageUrl: "https://images.unsplash.com/photo-1538331269258-6c97a6bdeae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmYXNoaW9ufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&q=60", primaryText: "A fashion destination where innovation meets elegance", secondaryText: "Fashion Redefined", description: "Embrace the thrill of staying ahead of the curve with our handpicked selection of cutting-edge trends" },
  ]

  return (
    <div className="hero">
      {data.map((info, index) => (
        <div key={index}>
          <img src={`${info.imageUrl}`} alt="" className={`${counter === index ? "show-image" : "hide-image"
            }`} key={index} />
          <div className={`${counter === index ? "text-show" : "text-hide"}`}>
            <h3>{info.primaryText}</h3>
            <h1>{info.secondaryText}</h1>
            <p>{info.description} </p>
            <button className="home-hero-btn" >SHOP NOW</button>
          </div>
        </div>
      ))}
      <div className="circle-wrapper">
        {[0, 1, 2].map((index) => (
          <div className={`circle ${counter === index ? "active" : ""}`} onClick={() => setCounter(index)} key={index} ></div>
        ))}
      </div>
    </div >
  )
}

export default Hero