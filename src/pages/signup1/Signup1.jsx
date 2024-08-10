import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Signup1.css";
import Navbar from "../../Components/Navbar/Navbar";

const Signup1 = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/signup3");
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  // const handlePetChange = (pet) => {
  //   setSelectedPet(pet);
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="sign-up-form">
        <div className="header-section">
          <h1 className="form-header">Sign Up</h1>
          <div className="upload-image">
            <label htmlFor="upload" className="upload-label">
              <div className="upload-placeholder">
                {uploadedImage ? (
                  <img src={uploadedImage} alt="Uploaded" />
                ) : (
                  "+"
                )}
              </div>
              <input
                type="file"
                id="upload"
                name="upload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>
        <div className="form-group half-width">
          <input
            type="text"
            placeholder="Your First Name"
            id="firstName"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Your Last Name"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="form-group triple-width">
          <input type="number" placeholder="91+" id="code" name="code" />
          <input
            type="text"
            placeholder="Phone Number"
            id="phone"
            name="phone"
          />
          <input type="text" placeholder="Your DOB" id="dob" name="dob" />
        </div>
        <div className="form-group full-width">
          <input
            type="email"
            placeholder="Your Email ID"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <b>I am a </b>
            <span className="span">(select all that apply)</span>
          </label>
          <div className="checkboxes">
            {[
              "Pet Parent",
              "Pet Boarder",
              "Pet Sitter",
              "Groomer",
              "Pet Lover",
              "Pet Walker",
              "Vet Doctor",
              "Trainer",
            ].map((role) => (
              <label
                key={role}
                className={selectedRoles.includes(role) ? "selected" : ""}
                onClick={() => handleRoleChange(role)}
              >
                <input
                  type="checkbox"
                  value={role}
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleChange(role)}
                />
                {role}
              </label>
            ))}
          </div>
        </div>
        <div className="step-indicator-container">
          <div className="step-indicator">
            <div className="dot red"></div>
            <div className="dot bordered"></div>
            <div className="dot bordered"></div>
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={handleNextClick}
          >
            Next{" "}
            <FontAwesomeIcon
              icon={faGreaterThan}
              style={{ color: "navy", marginLeft: "1rem" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
