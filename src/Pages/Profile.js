import React, { useState } from "react";
import "../Styles/Profile.css"

function Profile() {
  const [mobile, setMobile] = useState("");

  const handleInputChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mobile Number Submitted: " + mobile);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card text-center p-4 shadow">
        
        <div className="avatar-container mb-3">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" className="avatar-img"/>
          <h4 className="login-title mt-2">SIGN IN</h4>
          <p className="login-subtitle text-muted">sign in to proceed further</p>
        </div>

        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="mobile" className="form-label text-start">
              Mobile Number
            </label>
            <input type="text" id="mobile"className="form-control border-0 border-bottom" value={mobile} onChange={handleInputChange} placeholder="Enter your mobile number" required/>
          </div>
          <button type="submit" className="btn btn-secondary w-100 py-2" > NEXT </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
