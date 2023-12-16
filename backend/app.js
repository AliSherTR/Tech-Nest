const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");

const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
const multer = require("multer");
const upload = multer({ dest: "./uploads" });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use(errorHandler);

module.exports = app;
