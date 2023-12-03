module.exports = (sequelize, Datatype) => {
  const User = sequelize.define("User", {
    name: {
      type: Datatype.STRING,

      allowNull: false,
    },
    adress: {
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

  return User;
};
