import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.scss";

import Navbar from "./navbar/Navbar";
import Home from "./homepage/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Credential from "./credential/Credential.jsx";
import Profile from "./profile/Profile.jsx";
import CreateBlog from "./blog/CreateBlog";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credential" element={<Credential />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Credential />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  </div>
);
