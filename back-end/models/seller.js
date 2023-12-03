module.exports = (sequelize, Datatype) => {
  const Seller = sequelize.define("Seller", {
    name: {
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
    adress: {
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
