const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

router.get("/create", blogController.blog_index);

router.get("/", blogController.blog_details);

router.post("/", blogController.blog_create_post);

router.get("/:id", blogController.blog_create_get);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
