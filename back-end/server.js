const express = require("express");
const cors = require("cors");
const db = require("./models");
const bodyParser = require("body-parser");
require("dotenv").config();
const sequelize = db.sequelize;
const port = 7000;
const app = express();
const sellerRouter = require("./routes/seller");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const User = require("./models/User")(sequelize);
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
// const UserBasketRouter = require("./routes/userBasket");

// const UserHistoRouter = require("./routes/userHisto");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", adminRouter);
app.use("/", sellerRouter);
app.use("/", productRouter);
app.use("/", userRouter);
app.use(bodyParser.json());
// app.use("/", UserBasketRouter);
// app.use("/", UserHistoRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
