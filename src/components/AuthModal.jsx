const AuthModal = ({setShowModal}) => {
import { useState } from "react"

    const handleClick= () => {
        setShowModal (false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const isSignUp =true;

  return (
    <div className="auth-model">
        <div className="auth-button" onClick={handleClick}>X</div>
        <h2>{isSignUp ? 'Create Account' : 'Log in'}</h2>
        <p>By clicking Log in, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleSubmit}>
            <input type="email" 
            id="email"
            name="email"
            password="email"
            required={true}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </form>
        AUTH MODAL
    </div>
  )
}

export default AuthModal