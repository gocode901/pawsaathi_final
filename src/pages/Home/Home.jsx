import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <Link to="/Signup1" className="bg-green-600 m-2 p-2 rounded-xl">
        <button>Signup1</button>
      </Link>
      <Link to="/signup2" className="bg-blue-500 m-2 p-2 rounded-xl">
        <button>Signup2</button>
      </Link>
      <Link to="/Signup3" className="bg-blue-500 m-2 p-2 rounded-xl">
        <button>Signup3</button>
      </Link>
      <Link to="/Signup4" className="bg-orange-400 m-2 p-2 rounded-xl">
        <button>Signup4</button>
      </Link>
      <Link to="/Signup5" className="bg-green-600 m-2 p-2 rounded-xl">
        <button>Signup5</button>
      </Link>
    </div>
  );
};

export default Home;
