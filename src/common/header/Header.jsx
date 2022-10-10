import React from 'react'
import './style.css';
import settings from 'assets/images/settings.png';
import {
  FaBars,
} from 'react-icons/fa';
import {
  DiDatabase,
} from 'react-icons/di';

export const Header = (props) => {

  const [
    theme,
    setTheme
  ] = React.useState('dark-theme');

  const toggleTheme = () => {

    if (theme === 'dark-theme') {
      document.body.className = 'light-theme';
      setTheme('light-theme');
    } else {
      document.body.className = 'dark-theme';
      setTheme('dark-theme');
    }
  }

  return (
    <header className='header'>
      
      <div className='brand'>
        <FaBars  onClick={props.toggleMenu}/>
        <h3> <DiDatabase/>Krtak Software</h3>
      </div>

      <div className="dropdown">
      
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={settings} width={'30px'} alt="settings"/>
        </button>
        
        <ul className="dropdown-menu">
          <li 
            className="dropdown-item"
            onClick={() => toggleTheme()}>
            { theme === 'dark-theme'? 'Light Theme':'Dark Theme'}</li>
          <li className="dropdown-item">Option 2</li>
          <li className="dropdown-item">Option 3</li>
        </ul>
</div>
    </header>
  )
}