import React, { useContext } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/user.context';

function Navbar2() {
  const { logout } = useContext(UserContext)
  return (
    <>
  
    <nav className="sidebar">


    <div >
      <img id="brown_bg" src="images/brown_background.png" alt='background' />
      <svg className="brown_background">
      
        <path id="brown_background"></path>
      </svg>
      <div id="Logo">
        <img id="logo" src="images/logo.png" alt='logo' />
      </div>
    </div>
    <div>
  <ul className="navigation">
    <li>
      <img 
        id="dashboard_img"
        src="images/Component 402 – 4.png"
        alt=''
      />
      <NavLink to="/admin/dashboard" activeclassname="active">Dashboard</NavLink>
    </li>
    <li>
      <img
        id="navigation_img"
        src="images/menu.png"
        alt=''
      />
      <NavLink to="/admin/navigationBar" activeclassname="active">Navigation Bar</NavLink>
    </li>
    <li>
      <img
        id="announcements_img"
        src="images/Component 401 – 2.png"
        alt=''
      />
      <NavLink to="/admin/announcements" activeclassname="active">Announcements</NavLink>
    </li>
    <li>
      <img
        id="pgf_img"
        src="images/Component 400 – 2.png"
        alt=''
      />
      <NavLink to="/admin/personalised" activeclassname="active">Personalised / Group Facilitation</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 399 – 2.png"
        alt=''
      />
      <NavLink to="/admin/international" activeclassname="active">International Competition Hub</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 398 – 2.png"
        alt=''
      />
      <NavLink to="/admin/bridge" activeclassname="active">Bridge The Gap Program</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 393 – 2.png"
        alt=''
      />
      <NavLink to="/admin/successstories" activeclassname="active">Success Stories</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 394 – 2.png"
        alt=''
      />
      <NavLink to="/admin/registration" activeclassname="active">Registration</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 395 – 2.png"
        alt=''
      />
      <NavLink to="/admin/about" activeclassname="active">About Us</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 396 – 2.png"
        alt=''
      />
      <NavLink to="/admin/contactus" activeclassname="active">Contact Us</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Icon awesome-question-circle.png"
        alt=''
      />
      <NavLink to="/admin/whyus" activeclassname="active">Why Us</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Icon ionic-ios-settings.png"
        alt=''
      />
      <NavLink to="/admin/setting" activeclassname="active">Settings</NavLink>
    </li>
    <li>
      <img
        id="ic_img"
        src="images/Component 397 – 2.png"
        alt=''
      />
      <NavLink to="/admin/footer" activeclassname="active">Footer</NavLink>
    </li>
  </ul>
</div>
    </nav>


    
    </>
  )
}

export default Navbar2