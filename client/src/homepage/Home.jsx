import React, { useEffect, useState } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://blogity-blog.vercel.app/all");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="components">
        {data.map((e, i) => {
          return (
            <NavLink key={i} to={`/blog/${e._id}`} style={{ textDecoration: "none" }}>
              <div className="card card__secondary">
                <h2>{e.title}</h2>
                <p>{e.content.slice(0, 200)} <b> . . . . .</b></p>
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
