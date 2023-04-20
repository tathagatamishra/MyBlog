import React, { useEffect, useState } from "react";
import "./Home.scss";

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
            <div key={i} className="card card__secondary">
              <h2>{e.title}</h2>
              <p>{e.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}