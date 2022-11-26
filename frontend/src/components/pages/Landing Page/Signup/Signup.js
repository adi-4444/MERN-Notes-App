import React, { useState } from 'react'
import './Signup.css'


function Signup({ setAuth }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const signupHandler = (e) => {
    e.preventDefault()
    console.log({ name: name, email: email, password: password })
  }
  return (
    <div className='signup-body'>
      <div className="signup-wrapper">

        <div className="signup-form-group">
          <h2 className='text-xl'>Signup</h2>
          <form onSubmit={signupHandler}>
            <div className="form-group">
              <input type="text" className='form-control' name='name' placeholder="Name" autoFocus required
                value={name} onChange={(e) => setName(e.target.value)} />
              <label className='form-label'>Name *</label>
            </div>

            <div className="form-group">
              <input type="text" className='form-control' name='email *' placeholder="Email" required
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className='form-label'>Email *</label>
            </div>

            <div className="form-group">
              <input type="password" className='form-control' name='password' placeholder="Password" required
                value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className='form-label'>Password *</label>
            </div>

            <div className="form-group">
              <input type="password" className='form-control' name='confirmpassword' placeholder="ConfirmPassword" required
                value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <label className='form-label'>Confirm Password *</label>
              {
                password && confirmpassword ?
                  password === confirmpassword ?
                    <p style={{ color: "#1bab6e", fontSize: "12px", margin: "-7.5px 0px", padding: "0px", marginTop: "-15px" }}>* Password Matched</p>
                    : <p style={{ color: "red", fontSize: "12px", margin: "-7.5px 0px", padding: "0px", marginTop: "-15px" }}>* Password Not Matched</p>
                  : ("")
              }
            </div>

            <div className="signup-btn">
              <input type='submit' value='Signup' />
              <p>Already have an account ? <a href='/#' onClick={() => setAuth("login")}>Login</a></p>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Signup;