import "./Navbar.css";
import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleDot } from "@fortawesome/free-solid-svg-icons";
const Navbar5 = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const currencyStyle = {
    fontFamily: "Fredoka, sans-serif",
    fontWeight: "600",
    fontSize: "16px",
    color: "#000",
  };
  const [selectedPet, setSelectedPet] = useState("Dog");

  const handlePetChange = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div className=" Nav-Bar flex  ">
      <nav className="flex items-center justify-between h-12 w-full lg:px-2">
        <div className="flex text-md font-bold text-gray-700 lg:flex-grow">
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
            style={currencyStyle}
          >
            <option value="INR">INR</option>
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="Other">Others</option>
          </select>
        </div>
        <div className=" w-10 h-10 text-center pl-2">
          <div className="relative w-10">
            <img
              className="w-10 h-10 rounded-full absolute"
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
            />
            <div className="w-10 h-10 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
              <img
                className="hidden group-hover:block w-8"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar5;
