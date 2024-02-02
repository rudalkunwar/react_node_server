const Blog = require("../models/blog");

const add_blog = (req, res) => {
  const blog = new Blog(req.body);
  try {
    blog
      .save()
      .then((result) => {
        res.status(200).send("OK");
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json({ data: "Faild to add blog" });
      });
  } catch (e) {
    res.status(400).json({ data: "Cannot add blog" });
  }
};
const update_blog = (req, res) => {
  const id = req.params.id;
  const { title, snippet, body } = req.body;
  try {
    Blog.findByIdAndUpdate(id, req.body)
      .then((result) => {
        res.status(200).send("OK");
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json({ data: "Faild to update blog" });
      });
  } catch (e) {
    res.status(400).json({ data: "Faild to update blog" });
  }
};
const delete_blog = (req, res) => {
  const id = req.params.id;
  try {
    Blog.findByIdAndDelete(id)
      .then((result) => {
        res.status(200).send("OK");
      })
      .catch((e) => {
        res.status(400).json({ data: "Cannot delete blog" });
      });
  } catch (e) {
    res.status(400).json({ data: "Cannot delete blog" });
  }
};
const view_blogs = (req, res) => {
  try {
    Blog.find()
      .then((result) => {
        res.status(200).json({ blogs: result });
      })
      .catch((e) => {
        res.status(400).json({ data: "Cannot Get blogs" });
      });
  } catch (e) {
    res.status(400).json({ data: "Cannot Load blogs" });
  }
};
const view_blog = (req, res) => {
  try {
    const id = req.params.id;
    Blog.findById(id)
      .then((result) => {
        res.status(200).json({ blog: result });
      })
      .catch((e) => {
        res.status(400).json({ data: "Cannot Get blog" });
      });
  } catch (e) {
    res.status(400).json({ data: "Cannot Load blogs" });
  }
};

const edit_blog = (req, res) => {
  try {
    const id = req.params.id;
    Blog.findById(id)
      .then((result) => {
        res.status(200).json({ blog: result });
      })
      .catch((e) => {
        res.status(400).json({ data: "Cannot Get blog" });
      });
  } catch (e) {
    res.status(400).json({ data: "Cannot Load blogs" });
  }
};

module.exports = {
  add_blog,
  update_blog,
  delete_blog,
  view_blog,
  view_blogs,
  edit_blog,
};
