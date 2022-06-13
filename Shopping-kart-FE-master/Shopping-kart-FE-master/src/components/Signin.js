import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './Signin.css';

const Signup = ( ) => {

//     const handleSignIn = () => {
      
//     }
    const [data, setData] = useState({
      fullName: "",
      email: "",
      mobileNumber: "",
      about: "",
      dateOfBirth: "",
      gender: "",
      role: "",
      password: "",
      // Addresses: {
      //   houseNumber: "",
      //   streetName: "",
      //   colonyName: "",
      //   city: "",
      //   State: "",
      //   pincode: ""}
      
    })
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setData(prevInput => {
        return {
          ...prevInput,
          [name]: value
        }
      })
    }
    const handleSignIn = (event) => {
      event.preventDefault();
  
      const UserProfile = {
        fullName:data.fullName,
        image: data.image,
        email:data.email,
        mobileNumber:data.mobileNumber,
        about:data.about,
        dateOfBirth:data.dateOfBirth,
        gender:data.gender,
        role:data.role,
        password: data.password,
        // Addresses: {
        //   houseNumber: data.Addresses,
        //   streetName: data.Addresses,
        //   colonyName:data.Addresses,
        //   city:data.Addresses,
        //   State:data.Addresses,
        //   pincode:data.Addresses }
    }
    console.log(UserProfile);
  
    axios.post("http://localhost:8084/profile/add", UserProfile)
  }
  return (
    <div className='container'>
      <header>SIGN UP</header>
      <form className='signInForm'method='post' onSubmit={handleSignIn}>
      <Link to="/">
				<img
					className="LoginLogo"
					src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
					alt="e shopping cart"
				/>
			</Link>
        <div className='input-field'>
          <input className='fullName' placeholder='Full Name' onChange={handleChange} name='fullName' value={data.fullName} required/>
          <input className='email' placeholder='Email' onChange={handleChange} name='email' value={data.email} required/>
          <input className='dateOfBirth' placeholder='DateOfBirth' onChange={handleChange} name='dateOfBirth' value={data.dateOfBirth} required/>
          <input className='gender' placeholder='Gender' onChange={handleChange} name='gender' value={data.gender} required/>
          <input className='password' placeholder='Password' onChange={handleChange} name='password' value={data.password} required/>
          <input className='confirmPassword' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' required/>
          <input className='about' placeholder='About' onChange={handleChange} name='about' value={data.about} required/>
          <input className='role' placeholder='Role' onChange={handleChange} name='role' value={data.role} required/>
          <input className='mobileNumber' placeholder='Mobile Number' onChange={handleChange} name='mobileNumber' value={data.mobileNumber} required/>
          
        </div>
        {/* <Link to={"/home"}>
          <button className="signInPageBtn">Sign In</button>
				</Link>
         */}
         <button className="signInPageBtn">Sign In</button>
      </form>
    </div>
  );
}

export default Signup;