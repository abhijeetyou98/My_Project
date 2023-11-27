import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown2 from './Dropdown'
import UserContext from "../../context/user.context";
// import { Button } from "./Button";


function StudNavbar() {
  // to change or update the sate whose initial value is false
  const [click, setClick] = useState(false);
  // dropdown state
  const [dropdown, setDropdown] = useState(true);

  // this func is used to set the state to the opp of what it is , like a toggle
  // to switch from hamburger menu to x
  const handleClick = () => setClick(!click);
  // when setclick is set to one state the handle click is setting to opp state

  // in mobile when ever u click
  const closedMobileMenu = () => setClick(false);

  // Call the logout function from the context
  const doLogout = () => {
    UserContext.logout()
}
  // to toggle the dropdown
  const onMouseEnter =()=>{

// on mobile the dropdown disapperars that y we use if condition
if(window.innerWidth <960){
  setDropdown(false)  
}
else{
  setDropdown(true);
}
};

const onMouseLeave =()=>{

  // on mobile the dropdown disapperars that y we use if condition
  if(window.innerWidth <960){
    setDropdown(false)  
  }
  else{
    setDropdown(false);
  }
  };

  return (
   <div>
      <nav className="navbar">
        <div className="navbar-logo" onClick={closedMobileMenu} >
          <img src="images/logo.png" alt="logo" />
        
           <div className="title1" >Education Planet</div>
          <div className="title2">THE UTOPIA OF INTERNATIONAL CURRICULAM</div> 
          
        </div>
        {/* onclick is set to the function we created i.e handleclick and that how r going to change states */}
        <div className="menu-icon" onClick={handleClick}>
          {/* if click is true then show the X icon else show the Hamburger Menu */}
          {/* we r using shorthand , if click is true then will show times or will show bars */}
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        {/* here the clasname changes according to the click  */}
  <ul className={click ? "nav-menu active" : "nav-menu"}>
  {/* whenever hanburger is clicked it will drag out the menu */}


  <li className="nav-items">
    <Link to="/" className="nav-links" onClick={closedMobileMenu}>
      Home
    </Link>
  </li>

  <li className="nav-items"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Link
      to="/courses"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      Courses <i className="fas fa-caret-down" />
    </Link>
    {/* if the dropdown is true then it will show drop down components */}
   {dropdown && <Dropdown2/>}
  </li>

  <li className="nav-items">
    <Link
      to="/success-story"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      Success Story
    </Link>
  </li>
  <li className="nav-items">
    <Link
      to="/registration"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      Registration
    </Link>
  </li>
  <li className="nav-items">
    <Link
      to="/about-us"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      About us
    </Link>
  </li>
  <li className="nav-items">
    <Link
      to="/contact"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      Contact
    </Link>
  </li>

{
  (UserContext.isLogin)?
  <>
  
  <li className="nav-items">
    <Link onClick={doLogout}>
    Logout
    </Link>
  </li>
  </>
  : (
    <>
    <li className="nav-items">
    <Link
      to="/sign-in"
      className="nav-links-mobile"
      onClick={closedMobileMenu}
    >
      Sign-up
     
    </Link>
  </li>
  <li className="nav-items">
    <Link
      to="/sign-in"
      className="nav-links"
      onClick={closedMobileMenu}
    >
      Sign-up
    </Link>
  </li>
    </>
  )
}

      </ul>
      {/* <Button/> */}
      </nav>
  </div>

    
  );
}

export default StudNavbar;