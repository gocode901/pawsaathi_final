import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import "./Signup3.css";

const Signup3 = () => {
  const [selectedPet, setSelectedPet] = useState("Dog");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handlePetChange = (pet) => {
    setSelectedPet(pet);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="pet-container">
      <nav className="navbar">
        <div className="radio-buttons">
          {["Dog", "Cat"].map((pet) => (
            <label
              key={pet}
              className={selectedPet === pet ? "selected" : ""}
              onClick={() => handlePetChange(pet)}
            >
              <input
                type="radio"
                name="pet"
                value={pet}
                checked={selectedPet === pet}
                onChange={() => handlePetChange(pet)}
              />
              {pet}
            </label>
          ))}
        </div>
        <div className="nav-right">
          <div className="search-bar">
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="Search something here!" />
          </div>
          <a href="#" className="join-button">
            Join the community
          </a>
          <FontAwesomeIcon icon={faCircleDot} style={{ color: "#d92020" }} />
          <select
            className="currency-dropdown"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="Other">Others</option>
          </select>
        </div>
      </nav>
      <div className="pet-sign-up-form">
        <div className="pet-header-section">
          <h2 className="pet-form-header">
            Alright, <br />
            Let's create a profile for your Pet
          </h2>
          <div className="pet-profile-and-images">
            <div className="pet-upload-image">
              {uploadedImage ? (
                <div className="pet-upload-placeholder">
                  <img src={uploadedImage} alt="Uploaded" />
                </div>
              ) : (
                <div className="pet-upload-placeholder">
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    className="pet-plus-icon"
                  />
                </div>
              )}
              <label className="pet-upload-label">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                +
              </label>
            </div>
          </div>
        </div>
        <div className="pet-form-group"></div>
        <div className="pet-form-group pet-Name">
          <input type="text" placeholder="Your Pet's Name" />
          <input type="text" placeholder="User Name" />
        </div>
        <div className="pet-form-group pet-gender-breed">
          <input type="text" placeholder="Dog" />
          <input type="text" placeholder="Cat" />
          <input type="text" placeholder="Pet's Breed" />
          <input type="text" placeholder="Male" />
          <input type="text" placeholder="Female" />
        </div>
        <div className="pet-form-group pet-birthday-weight-height">
          <input type="text" placeholder="Pet's Birthday" />
          <div className="weight-container" data-unit="kg">
            <input type="text" placeholder="Weight" />
          </div>
          <div className="height-container" data-unit="cm">
            <input type="text" placeholder="Height" />
          </div>
        </div>
        <div className="pet-skip-buttons">
          <button className="pet-skip-button1">I don't have a pet</button>
          <button className="pet-skip-button2">I'll do it later</button>
        </div>
        <div className="pet-step-indicator-container">
          <button className="pet-submit-button">Add another pet</button>
          <button className="pet-submit-button-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Signup3;
