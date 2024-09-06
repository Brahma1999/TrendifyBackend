const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const ProductSRouters = require("./routes/Products");
const categoriesRouter = require("./routes/Catgories");
const brandsRouter = require("./routes/Brands");
const usersRouter = require("./routes/Users");
const authRouter = require("./routes/Auth");

//middleware
app.use(cors());
app.options("*", cors());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());

//Dot Env
const port = process.env.PORT;
// const api_url = process.env.API_URL;
const database_url = process.env.CONNECTION_STRING;
const { createProduct } = require("./controller/Product");

app.use("/products", ProductSRouters.router);
app.use("/categories", categoriesRouter.router);
app.use("/brands", brandsRouter.router);
server.use("/users", usersRouter.router);
server.use("/auth", authRouter.router);

//Database Connection
mongoose
  .connect(database_url, {})
  .then(() => {
    console.log("Database Connected Succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(port, () => {
  console.log("Server Started succesfully on port " + port);
});
