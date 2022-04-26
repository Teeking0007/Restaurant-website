import React, {useState} from 'react';
import './Navbar.css'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return ( 
        <nav className='navbar'>
            <div className='logo'>
              <Link exact='true' to='/'>
              <p> Pizza <span>Palace</span> </p>
              </Link>
              
            </div>
            <div className='menu-icon' onClick={handleClick}>
                {clicked? <FaTimes/>: <FaBars/> }
              </div>
            <ul className={clicked? 'nav-child' : 'nav-child closed'}>
              <Link exact='true' to='/'> <li>  Home </li> </Link>  
              <Link to='/About'> <li>  About </li> </Link>  
              <Link to='/Products'> <li>  Products </li> </Link>  
              <Link to='/Contact'> <li>  Contact </li> </Link>  
                
            </ul>
        </nav>
     );
}
 
export default Navbar;