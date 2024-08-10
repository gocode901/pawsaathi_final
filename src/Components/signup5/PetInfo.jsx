import React, { useState } from "react";
import "./PetInfo.css";

const PetInfo = () => {
  const [count, setCount] = useState(1);

  const increaseCounter = () => {
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    if (count == 0) return;
    setCount(count - 1);
  };
  const [selectedPet, setSelectedPet] = useState("Dog");

  const handlePetChange = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div className="w-full pt-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-center w-4/6">
            <p
              className="text-xl mb-1"
              style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
            >
              Add a listing for your Service
            </p>
            <p className="mb-1 px-12">
              Give a name to your service -you can use a combination of the
              service you offer, the city name & pets you accept to customize
              listing
            </p>
          </div>
          <input
            className="bg-white w-2/6 py-2 px-4  mb-10 text-start rounded-xl text-sm focus:outline-none"
            type="text"
            name="text"
            placeholder="e.g. Sandesh’s Dog Boarding Thane"
          />
        </div>
      </div>

      <div className="flex flex-row">
        {/* first column */}
        <div className="ml-5">
          <div>
            <p
              className=" ml-3"
              style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
            >
              {" "}
              What Pets you can host?
            </p>

            <div className="flex rounded-md justify-between mx-2">
              <div className="petinfo-buttons">
                {["Dog", "Cat"].map((pet) => (
                  <label
                    key={pet}
                    className={selectedPet === pet ? "selected" : ""}
                    onClick={() => handlePetChange(pet)}
                  >
                    <input
                      type="petinfo"
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
          </div>
          <div>
            {/* counting pets  */}
            <div className="flex flex-col items-start px-2 justify-start w-4/5">
              <p
                className="font-bold"
                style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
              >
                How many pets can you watch at your home at one time?
              </p>
              {/* counter */}
              <div className="flex flex-row mt-2">
                <button
                  id="decrement-btn"
                  className="flex justify-center items-center w-7 h-7 rounded-full text-white focus:outline-none bg-red-600 hover:bg-gray-500 mt-1"
                  onClick={decreaseCounter}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </button>
                <span
                  id="counter"
                  className="text-4xl font-bold mx-4 bg-white px-3 rounded-lg"
                >
                  {count}
                </span>
                <button
                  id="increment-btn"
                  className="flex justify-center items-center w-7 h-7 rounded-full text-white focus:outline-none bg-red-600 hover:bg-indigo-600 mt-1"
                  onClick={increaseCounter}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v12M6 12h12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="justify-start ">
            {/* range label  */}
            <div className=" relative mb-6 pl-2 pr-4">
              <label htmlFor="labels-range-input" className="sr-only">
                Labels range
              </label>
              <p
                className="font-bold"
                style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
              >
                How far can you travel for Pick-up?
              </p>
              <input
                id="labels-range-input"
                type="range"
                min="100"
                max="1000"
                className="w-4/5 h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <span className="text-sm text-gray-500 dark:text-gray-400 absolute  start-0 -bottom-6">
                0 KM
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute  start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                1.5 KM
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute  start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                20 KM
              </span>
            </div>
          </div>
          <div className="px-2">
            <p
              className="font-bold"
              style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
            >
              Sizes of Pets you can intake
            </p>
            <div className="w-3/4 flex justify-between items-start">
              <input
                className="btn  bg-white text-gray-500 dark:text-gray-400 rounded-lg font-light focus:outline-none"
                type="button"
                value="Small"
              />
              <input
                className="btn bg-white  text-gray-500 dark:text-gray-400 rounded-lg font-light focus:outline-none"
                type="button"
                value="Medium"
              />
              <input
                className="btn bg-white  text-gray-500 dark:text-gray-400  rounded-lg font-light focus:outline-none"
                type="button"
                value="Large"
              />
            </div>
          </div>
        </div>
        {/* 2nd column  */}
        <div className="mx-10">
          <p
            className="font-bold"
            style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
          >
            Short Description of your Service
          </p>
          <div className="form-floating py-2 ">
            <textarea
              className="resize-none rounded-xl text-start p-2 text-xs"
              id="floatingTextarea2"
              placeholder="Give your viewers an overview about what all services your offer. Tell them about your likes, about your boarding experience, and what all things you or don’t do while boarding. Make it stand out!"
              style={{ height: "75px", width: "350px" }}
            ></textarea>
          </div>
          <div>
            <p
              className=" mt-4"
              style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
            >
              Type your Prices for the following :
            </p>
            <div className=" ">
              <div className="flex flex-row mb-2 mt-2">
                <div className="col"></div>
                <div className="col text-sm">
                  <b className="font-bold">Half-Day</b>
                  <div className="text-xs">(upto 4 hr)</div>
                </div>
                <div className="col text-sm">
                  <b className="font-bold">Full-Day</b>
                  <div className="text-xs">(upto 10 hr)</div>
                </div>
                <div className="col text-sm">
                  <b className="font-bold">Over-Night</b>
                  <div className="text-xs">(upto 24 hr)</div>
                </div>
              </div>

              <div className="flex flex-row mr-2">
                <div className="col">Dog</div>

                <div className="w-20 mr-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                  />
                </div>
                <div className="w-20 mr-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Mid name"
                  />
                </div>
                <div className="w-20">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="input"
                  />
                </div>
              </div>

              <div className="flex flex-row mt-2 mr-2">
                <div className="col">Cat</div>

                <div className="w-20 mr-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="First name"
                  />
                </div>
                <div className="w-20 mr-2">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Mid name"
                  />
                </div>
                <div className="w-20">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third column */}
        <div className="ml-10 mr-5">
          <div className="">
            <p
              className="font-bold mb-1"
              style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}
            >
              About your Listing
            </p>
          </div>

          <div className=" flex justify-between text-center">
            <div className="flex flex-col items-start">
              <div className="">Type of Boarding</div>
              <input
                type="input"
                className="h-10 w-2/3 my-1 px-1 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <div className="ml-3">Sq. ft. area</div>
              <input
                type="input"
                className="h-10 w-2/3 mx-2 my-1  px-1 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
              ></input>
            </div>
          </div>

          {/* questions */}
          <div className="mt-4 ml-1">
            <div className=" flex mb-4 justify-between">
              <label className="block text-xs">
                Do you have a Dedicated Sleep Area?
              </label>
              <div className="flex mr-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="sleep"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="sleep"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex mb-4 justify-between">
              <label className="block text-xs">
                Do you have AC in the Sleeping Area?
              </label>
              <div className="flex mr-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="ac"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="ac"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex mb-4 justify-between">
              <label className="block text-xs">
                Do you have a Playing Area for Pets?
              </label>
              <div className="flex mr-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="playingArea"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="playingArea"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex mb-4 justify-between">
              <label className="block text-xs">
                Do you provide daily walking?
              </label>
              <div className="flex mr-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="walking"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    Yes
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="walking"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="mx-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PetInfo;
