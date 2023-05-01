import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add, close, logOutOutline, createOutline } from "ionicons/icons";

export default function Profile() {
  const [data, setData] = useState(null);

  const [blogData, setBlogData] = useState(null);

  const [id, setId] = useState(null);

  const navigate = useNavigate();

  // const BASE_URL = "http://localhost:4000";
  const BASE_URL = "https://blogity-blog.vercel.app";

  useEffect(() => {
    let id = localStorage.getItem("user-id");
    setId(id);

    axios
      .get(`${BASE_URL}/profile/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${BASE_URL}/myblogs/${id}`)
      .then((res) => {
        setBlogData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  function deleteBlog(key) {
    axios
      .delete(`${BASE_URL}/delete/${key}/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function edit() {}

  function logOut() {
    localStorage.removeItem("user-id");

    navigate("/");
  }

  if (data) {
    return (
      <div className="proComponent">
        <div className="componentHeader">
          <h2 className="proHeading">Profile</h2>
          <div className="empt"></div>
          <div className="edit" onClick={edit}>
            <IonIcon icon={createOutline} />
          </div>
          <div className="logOut" onClick={logOut}>
            <IonIcon icon={logOutOutline} />
          </div>
        </div>

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
            <NavLink
              to="/create-blog"
              style={{ textDecoration: "none" }}
            >
              <div className="addCard addCard__secondary">
                <IonIcon icon={add} />
              </div>
            </NavLink>

            {blogData.map((e, i) => {
              return (
                <div key={i} className="blogCard blogCard__secondary">
                  <div className="cross">
                    <div className="crossButton" onClick={() => deleteBlog(i)}>
                      <IonIcon icon={close} />
                    </div>
                  </div>

                  <NavLink to={`/blog/${e._id}`} style={{ textDecoration: "none" }}>
                    <div className="text">
                      <h2>{e.title}</h2>
                      <p>{e.content.slice(0, 200)} <b> . . . . .</b></p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
