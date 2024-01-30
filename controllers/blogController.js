const Blog = require("../models/blog");

const add_blog = (req, res) => {};
const update_blog = (req, res) => {};
const delete_blog = (req, res) => {};
const view_blogs = (req, res) => {
  res.json({ message: "Sucesss" });
};
const view_blog = (req, res) => {};

module.exports = { add_blog, update_blog, delete_blog, view_blog, view_blogs };
