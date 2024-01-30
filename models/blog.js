const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,

      required: true,
    },
  },
  { timestamp: true }
);
const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
