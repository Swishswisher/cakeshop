import React, {useState} from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import './Navbar.css'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="app__Navbar">
      <div className="app__Navbar-main-div">
        <nav className="app__Navbar-nav">
          <div className="app__Navbar-logo">
            <svg className="app__Navbar-logo-img" xmlns="http://www.w3.org/2000/svg" width="30.026" height="28.76" viewBox="0 0 30.026 28.76">
              <path id="Path_2" data-name="Path 2" d="M28.761,15.487a3.194,3.194,0,0,0-4.956.524l-.934,1.341V10.247C22.871,4.6,18.925,0,14.075,0s-8.8,4.6-8.8,10.247V23.663a3.979,3.979,0,0,0-2.639-1.051A2.885,2.885,0,0,0,0,25.686,2.885,2.885,0,0,0,2.639,28.76H23.871l5.341-7.5A4.585,4.585,0,0,0,28.761,15.487ZM2.639,26.711a1.037,1.037,0,0,1,0-2.049,2.705,2.705,0,0,1,2.489,2.049Z" fill="#fdffd5"/>
            </svg>
            <h1 className="app__Navbar-h1">zeecraft.</h1>
            <h1 className="p-line-1">|</h1> 
            <p className="app__Navbar-p app__Navbar-delivery" href="#">Delivery</p>
          </div>

          <div className="app__Navbar-div-2">
            <p className="app__Navbar-p app__Navbar-become-a-baker">BECOME A BAKER</p>
            <div className="app__Navbar-p p-line-2">|</div>
            <p className="app__Navbar-p app__Navbar-sign-in">SIGN IN </p>
            <HiMenuAlt4 className="app__Navbar-menu-icon" onClick={() => setToggleMenu(true)}/>
          </div>
        </nav>
      </div>

      {toggleMenu && (
        <div className="app__Navbar-nav-2">
          <ul className="app__Navbar-ul">
              {['home', 'fathersday', 'popular', 'topbaker', 'recent', 'bytes'].map((item) => (
                <li className="app__Navbar-links" key={`link-${item}`} >
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
          </ul>

          <HiX className="app__Navbar-close-icon" onClick={() => setToggleMenu(false)}/>
        </div>
      )}

      {/* <div className="app__Navbar-small-screen">
        <ul className="app__Navbar-ul">
            {['home', 'fathersday', 'popular', 'topbaker', 'recent', 'bytes'].map((item) => (
              <li className="app__Navbar-links" key={`link-${item}`} >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
        </ul>

        <HiX className="app__Navbar-close-icon" onClick={() => setToggleMenu(false)}/>
      </div> */}
      
    </div>
  )
}

export default Navbar