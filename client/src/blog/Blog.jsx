import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./Blog.scss";
import axios from "axios";

export default function Blog() {

  const [data, setData] = useState("");

  // const BASE_URL = "http://localhost:4000";
  const BASE_URL = "https://blogity-blog.vercel.app";


    const { id } = useParams();

    axios
      .get(`${BASE_URL}/read/${id}`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  

  return (
    <div className="blogComponent">
      <h1 className="blogTitle">
        {data.title}
      </h1>
      <p className="blogContent">
        {data.content}
        
      </p>
    </div>
  );
}
