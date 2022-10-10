import React from 'react';
import './style.css';

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>
        Dashboard
      </h2>
      <hr/>
      <div className='dashboard-inner'>
        <div className='my-card'>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo.</p>
        </div>

        <div className='my-card'>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo.</p>
        </div>

        <div className='my-card'>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo.</p>
        </div>
      </div>
    </div>
  )
}