import "./PetInfo.css";
import React from "react";

const PetInfo = () => {
  return (
    <>
      <div className="pet-Info">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-center w-3/5">
              <p className="font-bold text-xl mb-2">
                Add a listing for your Service
              </p>
              <p className="mb-2">
                Give a name to your service -you can use a combination of the
                service you offer, the city name & pets you accept to customize
                listing
              </p>
            </div>
            <input
              className="bg-white w-2/5 py-2 px-3 mb-10 text-center rounded-xl text-sm focus:outline-none"
              type="text"
              name="text"
              placeholder="e.g. Sandesh’s Dog Boarding Thane"
            />
          </div>
        </div>

        <div className=" flex flex-row text-center">
          {/* first column */}
          <div className="col ">
            <div className="font-medium ">
              What are the Pets you can host?
              <div className="flex rounded-md justify-center">
                <input
                  className="bg-white rounded w-1/4 p-1 py-2 m-2 text-sm text-center focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="text"
                  placeholder="Dog"
                />

                <input
                  className="bg-white rounded w-1/4 p-1 m-2 text-sm text-center focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="text"
                  placeholder="Cat"
                />
              </div>
            </div>
            <div>
              {/* counting pets  */}
              <div className="flex items-center justify-center">
                <button
                  id="decrement-btn"
                  className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
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
                <span id="counter" className="text-4xl font-bold mx-4">
                  1
                </span>
                <button
                  id="increment-btn"
                  className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
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
            <div className="mb-6 px-5">
              {/* range label  */}
              <div className="relative mb-6 px-3">
                <label htmlFor="labels-range-input" className="sr-only">
                  Labels range
                </label>
                <p>How far can you travel for Pick-up?</p>
                <input
                  id="labels-range-input"
                  type="range"
                  min="100"
                  max="1500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  0 KM
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  2 KM
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  5 KM
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  10 KM
                </span>
              </div>
            </div>{" "}
            bg-white
            <div className="pt-2 px-3">
              <p>Sizes of Pets you can intake</p>
              <div className="w-full flex justify-evenly align-items-center pt-3 pb-1">
                <input
                  className="btn  bg-white  dark:text-gray-400 rounded-md font-light focus:outline-none"
                  type="button"
                  value="Small"
                />
                <input
                  className="btn bg-white  dark:text-gray-400 rounded-md font-light focus:outline-none"
                  type="button"
                  value="Medium"
                />
                <input
                  className="btn bg-white  dark:text-gray-400  rounded-md font-light focus:outline-none"
                  type="button"
                  value="Large"
                />
              </div>
            </div>
          </div>
          {/* 2nd column  */}
          <div className="col">
            <div className="mx-5">
              <p className="font-bold">Short Description of your Service</p>
              <div className="form-floating py-2 ">
                <textarea
                  className="form-control resize-none"
                  id="floatingTextarea2"
                  placeholder="Leave a comment here"
                  style={{ height: "82px" }}
                ></textarea>
              </div>
              <div>
                <p>Type your Prices for the following :</p>
                <div className="container px-0">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col"></div>
                    <div className="col text-sm">
                      <b>Half-Day</b>
                      <div className="text-xs">(upto 4 hr)</div>
                    </div>
                    <div className="col text-sm">
                      <b>Full-Day</b>
                      <div className="text-xs">(upto 10 hr)</div>
                    </div>
                    <div className="col text-sm">
                      <b>Over-Night</b>
                      <div className="text-xs">(upto 24 hr)</div>
                    </div>
                  </div>

                  <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-x-0.2">
                    <div className="col">Dog</div>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                  </div>

                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gap-x-0.2">
                    <div className="col">Cat</div>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                    <button
                      type="button"
                      className=" text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="col">
            <div className="mx-5">
              <p>About your Listing</p>
            </div>
            <div className="">
              <div className=" flex justify-between text-center px-8 ">
                <div>
                  <div className="g-col-6">Type of Boarding</div>
                  <input
                    type="input"
                    className=" g-col-6 py-2 mx-2 my-1 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                  ></input>
                </div>
                <div>
                  <div className="g-col-6">Sq. ft. area</div>
                  <input
                    type="input"
                    className=" g-col-6 py-2 mx-2 my-1 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
                  ></input>
                </div>
              </div>
            </div>
            <div className="px-8 pt-2 ">
              <div className=" flex mb-4 justify-between">
                <label className="block text-xs">
                  Do you have a Dedicated Sleep Area?
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    id="yes"
                    name="agreement"
                    value="yes"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="yes" className="ml-2 text-gray-700">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="agreement"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="ml-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
              <div className=" flex mb-4 justify-between">
                <label className="block text-xs">
                  Do you have AC in the Sleeping Area?
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    id="yes"
                    name="agreement"
                    value="yes"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="yes" className="ml-2 text-gray-700">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="agreement"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="ml-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>

              <div className=" flex mb-4 justify-between">
                <label className="block text-xs">
                  Do you have a Playing Area for Pets?
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    id="yes"
                    name="agreement"
                    value="yes"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="yes" className="ml-2 text-gray-700">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="agreement"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="ml-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>

              <div className=" flex mb-4 justify-between">
                <label className="block text-xs">
                  Do you provide daily walking?
                </label>
                <div className="flex">
                  <input
                    type="radio"
                    id="yes"
                    name="agreement"
                    value="yes"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="yes" className="ml-2 text-gray-700">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="no"
                    name="agreement"
                    value="no"
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <label htmlFor="no" className="ml-2 text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PetInfo;
