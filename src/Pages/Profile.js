import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <form action="/form-register"  className="profile-form" >
        <h2>Registration Page</h2>
        <input type="text"placeholder="First Name" name="First_name" required className="form-input" />
        <input type="text" placeholder="Last Name"  name="Last_name"  required className="form-input"/>
        <input type="email" placeholder="Email"name="email" required className="form-input"/>
        <input type="text" placeholder="Mobile Number"name="mobilenumber" required className="form-input"/>
        <input type="password" placeholder="New Password" name="newPass" required className="form-input"  />
        <input type="password" placeholder="Confirm Password" name="cnfpass" required className="form-input"/>
        <Link to="/login" className="login-link"> Already Registered? Login Here </Link>
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Profile;
