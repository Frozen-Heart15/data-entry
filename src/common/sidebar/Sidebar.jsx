import React from 'react';
import {
  FaTh,
} from 'react-icons/fa';
import {
  HiOfficeBuilding,
} from 'react-icons/hi';
import {
  BiNote,
} from 'react-icons/bi';
import {
  NavLink
} from 'react-router-dom';
import './style.css';

export const Sidebar = (props) => {

  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh/>
    },
    {
      path: '/note-entry',
      name: 'Note Entry',
      icon: <BiNote/>
    },
    {
      path: '/firm-entry',
      name: 'Firm Entry',
      icon: <HiOfficeBuilding/>
    },
  ]

  return (
    <>
    <div className='sidebar-out'>
    { window.location.href !== 'http://localhost:3000/login' &&
    <div className='sidebar'>
      {
        menuItem.map((item,index) => (
          <NavLink to={item.path} key={index} className='sidebar-link' activeclassname='sidebar-active'>
            {item.icon}
            &nbsp;
            {
              props.showMenu &&
            <h5>
              {item.name}
            </h5>
            }
          </NavLink>
        ))
      }
    </div>
    }
    <div className='main'>
      {props.children}
    </div>
    </div>
</>
  )
}
