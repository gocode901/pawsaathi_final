const Location = () => {
  return (
    <div className=" flex flex-col items-left justify-center">
      <div>
        <p
          className="mb-4 text-lg ml-2"
          style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 500 }}
        >
          Enter Your Address & Location
        </p>
      </div>
      <div className="w-full">
        <form>
          <div className="w-full flex flex-col">
            <div className="flex flex-row w-5/6 mb-2">
              <input
                type="text"
                placeholder="Address Line 1"
                className="flex-1 p-2 m-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-row w-5/6 mb-2">
              <input
                type="text"
                placeholder="Address Line 2"
                className="flex-1 p-2 m-1 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-row w-5/6 mb-2">
              <input
                type="text"
                placeholder="Pincode"
                className="p-2 m-1 w-1/2 rounded-md border border-gray-300"
              />
              <input
                type="text"
                placeholder="City"
                className="p-2 m-1 w-1/2 rounded-md border border-gray-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-1/3 ml-1 mt-1 bg-red-500 btn btn-primary"
            style={{ backgroundColor: "rgba(255, 86, 79, 1)" }}
          >
            Finish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Location;
