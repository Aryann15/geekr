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
            <br></br>
            <br></br>
            <label>Gender</label>
            <div className="multiple-input">
              <input
                id="man_gender_id"
                type="radio"
                name="gender_identity"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man_gender_id">Male</label>
              <input
                id="woman_gender_id"
                type="radio"
                name="gender_identity"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman_gender_id">Female</label>

              <input
                id="more_gender_id"
                type="radio"
                name="gender_identity"
                value="more"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="more_gender_id">More</label>
            </div>
            <br></br>
            <label>Who are you?</label>
            <div className="multiple-input">
              <input
                id="front_end_developer"
                type="radio"
                name="front-end"
                value="front_end_developer"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="front-end_dev">Front End Developer</label>

              <input
                id="backend_developer"
                type="radio"
                name="backend"
                value="backend_developer"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="backend_developer">Backend Developer</label>

              <input
                id="Fullstack_developer"
                type="radio"
                name="fullstack_developer"
                value="fullstack-dev"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="Fullstack">Fullstack Developer</label>
            </div>

            <br></br>
            <label>WHo would you like as a partner</label>
            <div className="multiple-input">
              <input
                id="front_end_developer-interest"
                type="checkbox"
                name="front-end-interest"
                value="front_end_developer-interest"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="front-end_dev-interest">
                Front End Developer
              </label>

              <input
                id="backend_developer-interest"
                type="checkbox"
                name="backend-interest"
                value="backend_developer-interest"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="backend_developer-interest">
                Backend Developer
              </label>

              <input
                id="Fullstack_developer-interest"
                type="checkbox"
                name="fullstack_developer-interest"
                value="fullstack-dev-interest"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="Fullstack-interest">Fullstack Developer</label>
            </div>
            <br></br>

            <label htmlFor="about">About me</label>
            <input 
            id="about"
            type="text"
            name="about"
            required={true}
            placeholder=" I love javascript" 
            value={""}
            onChange={handleChange}
            />
          </section>


        </form>
      </div>
    </>
  );
};

export default Onboarding;
