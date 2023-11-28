module.exports = (sequelize, Datatype) => {
  const Product = sequelize.define("Product", {
    image: {
      type: Datatype.STRING,

      allowNull: false,
    },
    category: {
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

  Product.associate = (models) => {
    Product.belongsTo(models.Seller, {
      onDelete: "cascade",
    });
  };
  return Product;
};
