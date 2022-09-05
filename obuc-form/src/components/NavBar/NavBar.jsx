import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import cupcake from "../../img/logo.svg";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="">
        <div className="container">
          <Link to={"/"} className="h2 text-decoration-none fw-semi-bold">
            <img src={cupcake} alt="" className="cupcakeico" /> Registro de{" "}
            <span className="fw-bold">Vagas</span>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
