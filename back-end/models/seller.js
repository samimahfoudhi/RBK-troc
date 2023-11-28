module.exports = (sequelize, Datatype) => {
  const Seller = sequelize.define("Seller", {
    sellerName: {
      type: Datatype.STRING,

      allowNull: false,
    },
    phoneNumber: {
      type: Datatype.INTEGER,

      allowNull: false,
    },
    email: {
      type: Datatype.STRING,

      allowNull: false,
    },
    password: {
      type: Datatype.STRING,
      allowNull: false,
    },
  });

  Seller.associate = (models) => {
    Seller.hasMany(models.Product, {
      onDelete: "cascade",
    });
  };
  return Seller;
};
