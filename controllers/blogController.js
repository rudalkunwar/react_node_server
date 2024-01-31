const Blog = require("../models/blog");

const add_blog = (req, res) => {
  const blog = new Blog(req.body);
  blog.save(()=>{
    
  })
};
const update_blog = (req, res) => {};
const delete_blog = (req, res) => {};
const view_blogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.status(200).json({ blogs: result });
    })
    .catch((e) => {
      console.log(e);
    });
};
const view_blog = (req, res) => {};

module.exports = { add_blog, update_blog, delete_blog, view_blog, view_blogs };
