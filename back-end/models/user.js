
module.exports = (sequelize, Datatype) => {
  const User = sequelize.define("User", {
    name: {
      type: Datatype.STRING,

      allowNull: false,
    },
    adress: {
      type: Datatype.STRING,


module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    codeAdmin: {
      type: DataTypes.STRING,
    },
  });

  return User;
};

