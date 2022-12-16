import React, { useState } from 'react'
import './Login.css'

function Login({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }
  return (
    <div className='login_body items-end'>
      <div className="login_wrapper">

        <div className="login_form_group">
          <h2 className='text-xl'>Login</h2>
          <form onSubmit={loginHandler} >
            <div className="form_group">
              <input type="email" className='form_control' name='email *' placeholder="Email" autoFocus required
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <label className='form_label'>Email *</label>
            </div>

            <div className="form_group">
              <input type="password" className='form_control' name='password' placeholder="Password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <label className='form_label'>Password *</label>
            </div>

            <div className="login_btn">
              <input type='submit' value='Login' />
              <p> Don't have an account ? <span className='text-blue-900 font-semibold cursor-pointer' onClick={() => setAuth("signup")}>Signup</span></p>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login;