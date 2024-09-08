import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const LoginSignup = () => {
  const [action,setAction] = useState("Log in");

  return (
    <div>
        
        <div className='d-flex justify-content-center '>
          <div className="card col-6 mt-5" >
              <div className="card-body">
                <div>
                  <h2>{action}</h2>
                  <div id='lineContainer'>
                    <div id='underline'></div>
                  </div>
                  
                </div>

                  {action === "Log in" ? <div></div> : 
                    <div className='form-floating mb-3'>
                    <input type="text" placeholder='' id="floatingInput" className='form-control' />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  }
                  
                  <div className='form-floating mb-3'>
                    <input type="text" placeholder='' id="floatingInput" className='form-control' />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input type="password" placeholder='' id="floatingInput" className='form-control' />
                    <label htmlFor="floatingInput">Password</label>
                  </div>

                  {action==="Sign up" ? <div></div> :
                    <div>
                    Forget password?<span> Click here</span>
                  </div>
                  }
                  
                  <div id='actionButton' className='mt-4'>
                    <button className={action==="Log in"? "submitbtn gray" : "submitbtn"} 
                    onClick={() => setAction("Sign up")} id='submitbtn'>Sign up</button>

                    <button className={action==="Sign up"? "submitbtn gray" : "submitbtn"} 
                    onClick={() => setAction("Log in")} id='submitbtn'>Log in</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default LoginSignup
