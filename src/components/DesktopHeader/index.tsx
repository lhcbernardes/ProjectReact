import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Dropdown from '../Dropdown';
import './Navbar.css';

const itens: ItensMenu[] = [
  {
    title: 'Marketing',
    path: '/marketing',
    cName: 'dropdown-link'
  },
  {
    title: 'Consulting',
    path: '/consulting',
    cName: 'dropdown-link'
  },
  {
    title: 'Design',
    path: '/design',
    cName: 'dropdown-link'
  },
  {
    title: 'Development',
    path: '/development',
    cName: 'dropdown-link'
  }
];
const Header: React.FC = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const {setAuthTokens} = useAuth();

  const logOut = () => {
    
    setAuthTokens();
    localStorage.removeItem('tokens');
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <nav className='navbar'>
        <Link to='/dashboard' className='navbar-logo' >
          REACT
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/dashboard' className='nav-links' >
              Home
            </Link>
          </li>
         
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              
            >
              Services <i className='fas fa-caret-down' />
            </Link>
              {dropdown && <Dropdown itens={itens}/>}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              
            >
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/profile' className='nav-links' >
              Perfil
            </Link>
          </li>
          <li className='nav-item' onClick={logOut}>
            <Link to='' className='nav-links' >
              Logout
            </Link>
          </li>
        </ul>
        
      </nav>

  );
}

export default Header;