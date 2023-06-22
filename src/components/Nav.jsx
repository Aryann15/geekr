import logo from "../images/geekkkr.png"

const Nav = ({authToken}) => {
  return (
    <nav>
        <div className="logo-container">
            <img className='logo' src={logo} alt="" />
        </div>
        {!authToken && <button className="nav-button">Log in</button>}
    </nav>
  )
}

export default Nav