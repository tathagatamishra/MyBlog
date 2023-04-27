import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";

export default function Profile() {
  const [data, setData] = useState(null);

  const [blogData, setBlogData] = useState(null);

  // const BASE_URL = "http://localhost:4000";
  const BASE_URL = "https://blogity-blog.vercel.app"

  useEffect(() => {
    axios
      .get(`${BASE_URL}/profile/64401a8cc494c7aeb0ebbe97`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${BASE_URL}/all`)
      .then((res) => {
        setBlogData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  if (data) {
    return (
      <div className="proComponent">
        <h2 className="proHeading">Profile</h2>
        <div className="profile profile__secondary">
          <h2>
            <b>Name</b> {data.name}
          </h2>
          <h3>
            <b>Email</b> {data.email}
          </h3>
        </div>
        
        {blogData && (
          <div className="myBlog">
            <NavLink to="/create-blog" style={{ textDecoration: "none" }}>
              <div className="addCard addCard__secondary">
                <IonIcon icon={add} />
              </div>
            </NavLink>

            {blogData.map((e, i) => {
              return (
                <NavLink key={i} to="/blog" style={{ textDecoration: "none" }}>
                  <div className="card card__secondary">
                    <h2>{e.title}</h2>
                    <p>{e.content}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
