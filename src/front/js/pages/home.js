import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>HOME</h1>
      
        <div style={{display:'flex', justifyContent: 'space-around', width:'300px' }} className="container">
          <Link  to="/login">
            <button>Go to login</button>
          </Link>
          <br />
          <Link to="/register">
            <button>Go to register</button>
          </Link>
        </div>
      
    </div>
  );
};