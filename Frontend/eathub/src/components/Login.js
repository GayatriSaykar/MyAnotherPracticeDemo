
import React, { useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const init = {
  username: { value: '', valid: false, touched: false, error: 'Username is required' },
  password: { value: '', valid: false, touched: false, error: 'Password is required' },
  formValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const { key, value, touched, valid, error, formValid } = action.data;
      return { ...state, [key]: { value, touched, valid, error }, formValid };
    case 'loginSuccess':
      return state; // You can handle any state update needed for successful login
    default:
      return state;
  }
};

const Login = () => {
  const [login, dispatch] = useReducer(reducer, init);
  const navigate = useNavigate();
  

  const validateData = (key, val) => {
    let valid = true;
    let error = '';

    switch (key) {
      case 'username':
        valid = val !== null && /^[a-zA-Z0-9_]+$/.test(val.trim());
        error = 'Username must be required and contain only letters, digits, and underscores';
        break;
      case 'password':
        valid = val.length >= 8 && val.length <= 15 && /[\W_]/.test(val);
        error = 'Password must be between 8 and 15 characters and contain at least one special character';
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);

    let formValid = true;
    for (let k in login) {
      if (login[k].valid === false || login[k].touched === false) {
        formValid = false;
        break;
      }
    }

    dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
  };

  const submitData = async (e) => {
    e.preventDefault();

    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username:login.username.value,
        password:login.password.value}),
    };
    console.log(reqOptions);

        fetch('http://localhost:8080/checkLogin', reqOptions).then(resp => {
         if(resp.ok){

          return resp.text();
         }
         else
         {
          return("Server error!!")
         }
    }).then(text => text.length ? JSON.parse(text) : {})
    .then(obj => {
        if (Object.keys(obj).length === 0) {
            alert("wrong uid and password")
        }
        else {
          // reduxaction(login(true))
            localStorage.setItem("loggedstatus", 1)

            // to keep info in key valye pair to use in session
            localStorage.setItem("loggedinfo", JSON.stringify(obj))
            console.log(JSON.stringify(obj));
          if(obj.status===false){
            alert("Request has not been approved");
            
            navigate('/');
          }
          
            
            else{
              localStorage.setItem("user",JSON.stringify(obj))
                if (obj.role_id.role_id === 2) {
                    navigate("/custhome")
                }
                else if (obj.role_id.role_id === 1) {
                    navigate("/admin")
                }
                else if (obj.role_id.role_id === 3) {
                    navigate("/vendor")
                }
              }
        }
    }).catch((error) => {
      console.error('API Error:', error);
      alert("server error, try after some time");
  });
  
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h1 className="text-center mb-4">Login</h1>
            <form onSubmit={submitData}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    login.username.touched && !login.username.valid ? 'is-invalid' : ''
                  }`}
                  value={login.username.value}
                  onChange={(e) => handleChange('username', e.target.value)}
                  onBlur={(e) => handleChange('username', e.target.value)}
                />
                {login.username.touched && !login.username.valid && (
                  <div className="invalid-feedback">{login.username.error}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <div className="input-group">
                  <input type='password'
                    className={`form-control form-control-sm ${
                      login.password.touched && !login.password.valid ? 'is-invalid' : ''
                    }`}
                    value={login.password.value}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onBlur={(e) => handleChange('password', e.target.value)}
                  />
                </div>
                {login.password.touched && !login.password.valid && (
                  <div className="invalid-feedback">{login.password.error}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-success btn-sm"
                disabled={!login.formValid}
              >
                Login
              </button>

              <div className="mt-3">
                <p className="mb-0">
                  New Mess Vendor? <Link to="/mess-signup"  className="link-success">Register here</Link>
                </p>
                <p className="mb-0">
                  New Customer? <Link to="/customer-signup"  className="link-success">Register here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
