import './MenWoman.scss'

const MenWomen = () => {
  return (
    <div className="menwoman">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1542059765-8a5aff6c0dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwbW9kZWx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1500&q=60" alt="" />
        <button>Men's shop</button>
      </div>
      <div className="right">
        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1500&q=60" alt="" />
        <button>Women's shop</button>
      </div>
    </div>
  )
}

export default MenWomen