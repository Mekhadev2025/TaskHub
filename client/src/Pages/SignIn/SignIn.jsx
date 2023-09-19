import React, { useState } from 'react'
import "../SignIn/SignIn.css"
const SignIn = () => {
  const [username,setUser]=useState(null)
  const [password,setPassword]=useState(null)
  const handleLoginSubmit=()=>{

  }
  return (
    <div className='signCont'>
      <h1 className='loginHeader'>Login</h1>
      <form onSubmit={handleLoginSubmit} className='loginForm'>
        <label className='label userlabel'>Username</label>
        <input  className="inputLog" type="text" value={username} onChange={(e)=>setUser(e.target.value)}/>
        <label className='label pwdlabel'>Password</label>
        <input className="inputLog"type="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <div className="btn-group">
           <button className='loginBtn'>
            Login
        </button>
        <span className='register'>Register</span>
        </div>
       
      </form>
    </div>
  )
}

export default SignIn
