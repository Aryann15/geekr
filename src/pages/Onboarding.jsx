import { useState } from "react"
import Nav from "../components/Nav"


const Onboarding = () => {

  const handleSubmit = () =>{
  }
  const handleChange = () => {}
  return (
    <>
    <Nav
    setShowModal= {() => {}}
    showModal ={false}
    />
    <div className="onboarding">
      <h2>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="first_name">First Name</label> 
          <input 
          id='first_name'
          type="text"
          name="first_name"
          placeholder="First Name"
          required={true} 
          value={""}
          onChange={handleChange}/>
        </section>
      </form>
    </div>
    </>
  )
}

export default Onboarding