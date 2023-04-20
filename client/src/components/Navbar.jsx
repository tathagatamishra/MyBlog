import React from "react";
import "./navbar.scss";
import { IonIcon } from "@ionic/react";
import { search, home, person } from "ionicons/icons";

export default function Navbar() {

  function searchBlog() {
    let searchKey = document.querySelector('.search__input').value
    console.log(searchKey);
    
  }

  return (
    <div className="navbar">
      <div className="icon">
        <div className="icon__home">
          <IonIcon icon={home} />
        </div>
      </div>

      <div className="s">
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <div className="search__icon">
            <IonIcon icon={search} />
          </div>
        </div>
        <div className="btn btn__primary" onClick={searchBlog}>
          <p>SEARCH</p>
        </div>
      </div>

      <div className="icon">
        <div className="icon__account">
          <IonIcon icon={person} />
        </div>
      </div>
    </div>
  );
}
