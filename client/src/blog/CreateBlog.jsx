import React, { useState } from "react";
import "./CreateBlog.scss";
import axios from "axios"

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const BASE_URL = "http://localhost:5000"
  const BASE_URL = "https://blogity-blog.vercel.app";

  function addPendingTask(event) {
    event.preventDefault();

    let newBlog = {
      title: title,
      content: content,
      userid: "64401a8cc494c7aeb0ebbe97",
    };

    axios
      .post(`${BASE_URL}/create`, newBlog)
      .then((res) => {
        console.log(res.data);
        // event.target.reset();
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div className="createBlog">
      <h1 className="createTitle">Create Your Blog Here</h1>

      <div className="addTask addTask__secondary">
        <form method="post" onSubmit={addPendingTask}>
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

      <p className="createContent"></p>
    </div>
  );
}