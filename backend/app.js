const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const Product = require("./models/productModel");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");

app.use(cors());

app.use(express.json());

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);
app.use(errorHandler);

module.exports = app;
