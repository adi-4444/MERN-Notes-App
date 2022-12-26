import React, { useState } from 'react'
import './Login.css'
import { saveUserInfo } from '../../../common/utils/helpers'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthLoader from '../../../common/components/authLoader/AuthLoader';

function Login({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const loginDataChangeHandler = (e) => {
    const name = e.target.name;
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
    setErrorMessage("");
  };

  const loginHandler = async (e) => {
    e.preventDefault()
    const inputData = { email, password }
    setLoading(true);
    try {
      axios.post("/api/users/login",
        inputData
      ).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          console.log(data)
          saveUserInfo(data)
          setLoading(false);
          navigate("/mynotes")
        }
      })
        .catch((err) => {
          // if failure, i will show an error
          const errMsg = err?.response?.data?.message || err?.message;
          setErrorMessage(errMsg);
          setLoading(false);
        });
    }
    catch (err) {
      // if failure, i will show an error
      const errMsg = err?.response?.data?.message || err?.message;
      setErrorMessage(errMsg);
      setLoading(false);
    }
  }
  return (
    <>
      {loading && <AuthLoader />}
      <div className='login_body items-end'>
        <div className="login_wrapper">

          <div className="login_form_group">
            <h2 className='text-xl'>Login</h2>
            <form onSubmit={loginHandler} >
              <div className="form_group">
                <input type="email" className='form_control' name='email' placeholder="Email" autoFocus required
                  value={email} onChange={loginDataChangeHandler}
                />
                <label className='form_label'>Email *</label>
              </div>

              <div className="form_group">
                <input type="password" className='form_control' name='password' placeholder="Password" required
                  value={password} onChange={loginDataChangeHandler}
                />
                <label className='form_label'>Password *</label>
              </div>

              <div className="login_btn">
                {errorMessage && (
                  <div className='error-msg text-red-600 text-center mb-1 text-xs'>
                    {errorMessage}
                  </div>
                )}
                <input type='submit' value='Login' />
                <p> Don't have an account ? <span className='text-blue-900 font-semibold cursor-pointer' onClick={() => setAuth("signup")}>Signup</span></p>
              </div>
            </form>
          </div>

        </div>
      </div>


    </>
  )
}

export default Login;