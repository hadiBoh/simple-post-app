import { Link } from "react-router-dom"
const Nav = ({searchbar,setSearchbar}) => {
  function handleChange(e){
    setSearchbar(e.target.value)
  }
  return (
    <nav className="nav">
      <input type="text"
       placeholder="search post"
       className="search"
       value={searchbar}
       onChange={(e)=>handleChange(e)}
        />
      <ul className="links">
        <li className="link"><Link className="react-a" to='/'>Home</Link></li>
        <li className="link"><Link className="react-a" to='/post'>Add post</Link></li>
        <li className="link"><Link className="react-a" to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav