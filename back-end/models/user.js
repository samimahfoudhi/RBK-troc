module.exports = (sequelize, Datatype) => {
  const User = sequelize.define("User", {
    userName: {
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
