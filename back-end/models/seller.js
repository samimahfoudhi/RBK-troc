module.exports = (sequelize, Datatype) => {
  const Seller = sequelize.define("Seller", {
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
