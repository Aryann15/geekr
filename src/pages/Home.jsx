
const Home = () => {
    const authToken= true;
  return (
    <div className="home">
        <h1>Let's Connect</h1>
        <button>
            {authToken ? "Signout": "Create Account"}
        </button>
    </div>

    
  )
}

export default Home