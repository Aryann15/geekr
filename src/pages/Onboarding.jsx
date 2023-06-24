import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <Nav setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />

            <label> BirthDate</label>
            <div className="multiple-input">
            <input
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
              required={true}
              value={""}
              onChange={handleChange}
            />

            <input
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
              required={true}
              value={""}
              onChange={handleChange}
            />
            <input
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
              required={true}
              value={""}
              onChange={handleChange}
            />
</div>


<label >Gender</label> 
<div className="multiple-input">

          <input 
          id='man_gender_id'
          type="radio"
          name="gender_identity"
          
          value='man'
          onChange={handleChange}
          checked = {false} />
<label htmlFor="man_gender_id">Male</label>
<input 
          id='woman_gender_id'
          type="radio"
          name="gender_identity"
          value='woman'
          onChange={handleChange}
          checked = {false} />
          <label htmlFor="woman_gender_id">Female</label>

<input 
          id='more_gender_id'
          type="radio"
          name="gender_identity"
          
          value='more'
          onChange={handleChange}
          checked = {false} />
          <label htmlFor="more_gender_id">More</label>
          </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
