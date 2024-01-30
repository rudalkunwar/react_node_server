const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));
const dbURI =
  "mongodb+srv://rudalkunwar:messi10@cluster0.frsepin.mongodb.net/nodeDB?retryWrites=true&w=majority";
try {
  app.listen(5000, () => {
    console.log("Server Started");
    mongoose
      .connect(dbURI)
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.log("Error Connecting to the database");
      });
  });
} catch (error) {
  console.log("Error connect to database");
}
app.get('/',(req,res)=>{
    console.log(req);
})
app.use(blogRoutes);
