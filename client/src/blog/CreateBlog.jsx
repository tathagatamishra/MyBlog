import React, { useState } from "react";
import "./CreateBlog.scss";
import axios from "axios";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const BASE_URL = "http://localhost:4000";
    const BASE_URL = "https://blogity-blog.vercel.app";


  function addBlog(event) {
    event.preventDefault();

    let newBlog = {
      title: title,
      content: content,
      userid: localStorage.getItem("user-id"),
    };
    console.log("new blog",newBlog);
    axios
      .post(`${BASE_URL}/create`, newBlog)
      .then((res) => {
        console.log(res.data);
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="createBlog">
      <h1 className="createTitle">Create Your Blog Here</h1>

      <div className="addTask addTask__secondary">
        <form method="post" onSubmit={addBlog}>
          <div>
            <textarea
              rows="2"
              type="textarea"
              className="inputs1"
              placeholder=" Title"
              required
              onChange={(event) => setTitle(event.target.value)}
            ></textarea>
            <textarea
              rows="3"
              type="textarea"
              className="inputs2"
              placeholder=" Description"
              required
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <button type="submit">+</button>
        </form>
      </div>
      
      <div className="createComponent">
        <h2 className="preview">Preview</h2>
        <h1 className="blogTitle">
          {title}
        </h1>
        <p className="blogContent">
          {content}
        </p>
      </div>
    </div>
  );
}
