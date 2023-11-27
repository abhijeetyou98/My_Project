import React, { useState } from 'react';
import { MenuItems } from './MenuItem';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown2() {
  // it is same as side navbar to toggel the clicl value
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        // if click is true dropdown-menu clicked will be showen or else the other one is
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
{/* to map through the menu item , to loop through it item , index is used  */}
{/* here we are passing 2 parameter names which can be any name, here index is the key */}
        {MenuItems.map((item, index) => {
          return (

            // item.cname is being targeted
            <li key={index}>
              <Link
                className={item.cName}
                // this is the path being targeted
                to={item.path}
                // its to make sure that whenever we click it the value is set to false
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown2;
