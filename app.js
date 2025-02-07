const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// import routes
const indexRoutes = require("./routes/index");
const testRoutes = require("./routes/test");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const errorRoutes = require("./routes/404");

require("dotenv").config();
const db = require("./db");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.static(path.join("public")));

// Routes
app.use("/", indexRoutes);
app.use("/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/*", errorRoutes);

// Connect to MongoDB
db().then(() => {
  app.listen(8001, () =>
    console.log("Server running on port 8001!")
  );
});
