import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import "./Navbar.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { search, home, person } from "ionicons/icons";

export default function Navbar() {
  const [id, setId] = useState(null);

  function searchBlog() {
    let searchKey = document.querySelector(".search__input").value;
    console.log(searchKey);
  }


  function homeOnClick() {
    document.querySelector("title").innerHTML = "All Blogs";
  }
  function profileOnClick() {
    document.querySelector("title").innerHTML = "Profile";
  }

  setInterval(() => {
    setId(localStorage.getItem("user-id"));
  }, 1000);

  return (
    <div className="navbar">
      <div className="icon">
        <NavLink to="/" onClick={homeOnClick}>
          <div className="icon__home">
            <IonIcon icon={home} />
          </div>
        </NavLink>
      </div>

      <div className="s">
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="under construction"
          />
          <div className="search__icon">
            <IonIcon icon={search} />
          </div>
        </div>
        <div className="btn btn__primary" onClick={searchBlog}>
          <p>SEARCH</p>
        </div>
      </div>

      {id == null ? (
        <NavLink to="login" onClick={profileOnClick}>
          <div className="icon">
            <div className="icon__account">
              <IonIcon icon={person} />
            </div>
          </div>
        </NavLink>
      ) : (
        <NavLink to={`/profile`} onClick={profileOnClick}>
          <div className="icon">
            <div className="icon__account">
              <IonIcon icon={person} />
            </div>
          </div>
        </NavLink>
      )}
    </div>
  );
}
