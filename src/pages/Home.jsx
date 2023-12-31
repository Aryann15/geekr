import Nav from "../components/Nav";
import { useState } from "react";
import AuthModal from "../components/AuthModal";


const Home = () => {
  const authToken = false;

const [showModal,setShowModal] = useState(false)
const [isSignUp,setIsSignUp] = useState(true)


  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <>
    <div className='overlay'>
      <Nav authToken={authToken} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
      <div className="home">
        <h1>Let's Connect</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>}
      </div></div>
    </>
  );
};

export default Home;
