const AuthModal = ({setShowModal}) => {


    const handleClick= () => {
        setShowModal (false)
    }
  return (
    <div>
        <button onClick={handleClick}>X</button>
    </div>
  )
}

export default AuthModal