import React from 'react';
import './style.css';
import {
  useNavigate,
} from 'react-router-dom';

export const Login = () => {

  const [
    state,
    setState
  ] = React.useState({
    showLogin: true,
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const toggleLogin = (show) => {
    setState(prevState => ({
      ...prevState,
      showLogin: show === 'login',
    }));
  }

  const handleChange = (event) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleLogin = () => {

    if (state.email === 'test@email.com' && state.password === '123') {
      navigate('/');
    } else{
      setState(prevState => ({
        ...prevState,
        email: '',
        password: '',
      }))
    }
  }

  return (
    <div className='login-background'>
      <div className='outer-container'>

        <div className='selector'>
          <h5 
            onClick={()=> toggleLogin('login')}
            className={(state.showLogin && 'selector-item selector-item-active') || 'selector-item'}>
            Login
          </h5>
          <h5
            onClick={()=> toggleLogin('register')}
            className={(!state.showLogin && 'selector-item selector-item-active') || 'selector-item'}>
            Sign up
          </h5>
        </div>
      

        <div className='login-container'>
        { state.showLogin && 
        
          <div className='login'>

            <h2 className='text-heading mb-4'>Login</h2>

            <div className='mb-4'>
              <label class="form-label text-my-primary">Email address</label>
              <input type="email" name="email" value={state.email} onChange={handleChange} class="form-control input-box" placeholder=""/>
            </div>

            <div className='mb-4'>
              <label class="form-label text-my-primary">Password</label>
              <input type="password" name="password" value={state.password} onChange={handleChange} class="form-control input-box" placeholder=""/>
            </div>

            <button className='btn-my mt-2' onClick={handleLogin}>
              Login
            </button>
          </div>
        }

        { !state.showLogin && 
        
          <div className='register'>
            
            <h2 className='text-heading mb-4'>Sign up</h2>
            
            <div className='mb-4'>
              <label class="form-label text-my-primary">Name</label>
              <input type="text" class="form-control input-box" placeholder=""/>
            </div>
            
            <div className='mb-4'>
              <label class="form-label text-my-primary">Email address</label>
              <input type="email" class="form-control input-box" placeholder=""/>
            </div>

            <div className='mb-4'>
              <label class="form-label text-my-primary">Password</label>
              <input type="password" class="form-control input-box" placeholder=""/>
            </div>

            <button className='btn-my mt-2'>
              Sign Up
            </button>
          </div>
        }
        </div>
      </div>
    </div>
  )
}