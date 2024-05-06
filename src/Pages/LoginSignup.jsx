import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const login = async () => {
    console.log("login page", formData);

    let responseData; // Declaring a variable to store response data

    // Sending a POST request using the fetch API
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Converting form data to JSON string
    })
      .then((response) => response.json()) // Parsing response JSON
      .then((data) => responseData = data); // Storing response data


    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }
  }




  const signup = async () => {
    console.log("Signup Function Executed", formData); // Logging the form data

    let responseData; // Declaring a variable to store response data

    // Sending a POST request using the fetch API
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Converting form data to JSON string
    })
      .then((response) => response.json()) // Parsing response JSON
      .then((data) => responseData = data); // Storing response data


    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.error)
    }
  };



  return (
    <div className='loginsignup'>

      <div className="loginsignup-container">

        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}<></>
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

        {state === "Sign Up"
          ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Log In</span></p>
          : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>}


        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>

      </div>

    </div>

  )
}
