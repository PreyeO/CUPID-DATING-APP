import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const HomeForm = () => {
  const handleToast = (e) => {
    e.preventDefault();
    toast.success("Sign-up successful!!.\n Time to meet our users");
    setInterval(() => {
      window.location = "/users";
    });
  };

  return (
    <div className="container">
       <ToastContainer style={{theme:"dark" ,marginBottom:300}}/>
      <div className="home-form">
        <h3>I am a </h3>

        <form>
          <div className="large-inputs">
            <input type="radio" name="gender" value="woman" />
            <label htmlFor="gender">Woman</label>
          </div>
          <br></br>
          <div className="large-inputs">
            <input type="radio" name="gender" value="man" />
            <label htmlFor="gender">Man</label>
          </div>
        </form>
        <br></br>
        <h3>I am looking for</h3>
        <form>
          <div className="large-inputs">
            <input
              type="radio"
              name="gender"
              value="Woman"
              className="inputs"
            />
            <label htmlFor="gender">Woman</label>
          </div>
          <br></br>
          <div className="large-inputs">
            <input type="radio" name="gender" value="man" />
            <label htmlFor="gender">Man</label>
          </div>
        </form>
        <form className="privacy-sec">
          <input type="checkbox" name="legal" />
          <label htmlFor="legal" id="privacy">
            I hereby confirm that i have read the{" "}
            <Link to="*">Terms & Conditions</Link> and
            <Link to="*"> Privacy Policy</Link>.
          </label>
        </form>
       
        <Link to="/users"><button onClick={handleToast}>Let's Get Started!</button></Link>
      </div>
    </div>
  );
};

export default HomeForm;
