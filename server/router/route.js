const express = require("express");
const router = express.Router();

const { signup, login, profile } = require("../controller/userCtrl");
const { create, all, read, update, myBlogs, remove } = require("../controller/blogCtrl");

router.get("/test", (req, res) => {
  let data = "😍";
  return res.send({ data: data });
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile/:id", profile);
router.get("/edit/:id", profile);

router.post("/create", create);
router.get("/all", all);
router.get("/read/:id", read);
router.get("/myblogs/:id", myBlogs);
router.get("/update/:id", update);
router.delete("/delete/:key/:userid", remove);


module.exports = router;
