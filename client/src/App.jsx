import React, { useEffect, useState } from "react";
import "./index.scss";

export default function App() {
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
            <div key={i} className="chip">
              {/* <div class="chip__icon"></div> */}
              <h2>{e.title}</h2>
              <p>{e.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
