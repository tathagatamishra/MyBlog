import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { search, home, person } from "ionicons/icons";

export default function Navbar() {
  function searchBlog() {
    let searchKey = document.querySelector(".search__input").value;
    console.log(searchKey);
  }

  function profileClick() {
    const fetchData = async () => {
      const response = await fetch(
        "https://blogity-blog.vercel.app/profile/64401a8cc494c7aeb0ebbe97"
      );
      const jsonData = await response.json();
      console.log(jsonData.data);
    };

    fetchData();
  }

  function homeOnClick() {
    document.querySelector("title").innerHTML = "All Blogs";
  }
  function profileOnClick() {
    document.querySelector("title").innerHTML = "Profile";
  }

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

      <NavLink to="/profile" onClick={profileOnClick}>
        <div className="icon" onClick={profileClick}>
          <div className="icon__account">
            <IonIcon icon={person} />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
