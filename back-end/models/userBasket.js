module.exports = (sequelize, Datatype) => {
  const UserBasket = sequelize.define("UserBasket", {
    image: {
      type: Datatype.STRING,

      allowNull: false,
    },
    description: {
      type: Datatype.STRING,
      allowNull: false,
    },
    price: {
      type: Datatype.INTEGER,

      allowNull: false,
    },
  });

  return UserBasket;
};
