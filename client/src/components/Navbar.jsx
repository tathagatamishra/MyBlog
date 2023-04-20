import React from "react";
import "./navbar.scss";
import { IonIcon } from "@ionic/react";
import { search, home, person } from "ionicons/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div class="icon">
        <div class="icon__home">
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
        <div class="btn btn__primary">
          <p>SEARCH</p>
        </div>
      </div>

      <div class="icon">
        <div class="icon__account">
          <IonIcon icon={person} />
        </div>
      </div>
    </div>
  );
}
