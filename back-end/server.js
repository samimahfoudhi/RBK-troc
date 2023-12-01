const express = require("express");
const cors = require("cors");
const db = require("./models");
const port = 7000;
const app = express();
const sellerRouter = require("./routes/seller");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
// const UserBasketRouter = require("./routes/userBasket");

// const UserHistoRouter = require("./routes/userHisto");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", adminRouter);
app.use("/", sellerRouter);
app.use("/", productRouter);
app.use("/", userRouter);
// app.use("/", UserBasketRouter);
// app.use("/", UserHistoRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
