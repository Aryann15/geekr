import { useState } from "react";

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password,setPassword]= useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  const[error,setError]= useState(null)


  console.log(email,password,confirmPassword )

  const handleClick = () => {
    setShowModal(false);
   setIsSignUp(true); 
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    try{
        if(isSignUp && (password != confirmPassword)){
            setError('passwords need to match');  
        }
        console.log("request to POST to our database");
    }
    catch(error){
        console.log(error)
    }
  };


  return (
    <div className="auth-model">
      <div className="auth-button" onClick={handleClick}>
        X
      </div>
      <h2>{isSignUp ? "Create Account" : "Log in"}</h2>
      <p>
        By clicking Log in, Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp &&  <input
          type="password"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className="secondary-button" type="submit"/>
        <p>{error}</p>

      </form>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
