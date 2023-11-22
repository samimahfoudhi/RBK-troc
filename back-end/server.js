const express = require("express");
const cors = require("cors");
const db = require("./models");
const port = 7000;
const app = express();
const sellerRouter = require("./routes/seller");
const productRouter = require("./routes/product");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", sellerRouter);
app.use("/", productRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
