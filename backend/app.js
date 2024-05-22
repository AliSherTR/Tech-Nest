const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const checkoutRouter = require("./routes/checkoutRoutes");
const cors = require("cors");

const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/checkout", checkoutRouter);

app.use(errorHandler);

module.exports = app;
