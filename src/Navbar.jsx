import { Link } from "react-router-dom"
export const Navbar = ()=>{
  return(
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/college">College</Link>
    </div>
  )
}