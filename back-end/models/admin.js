module.exports = (sequelize, Datatype) => {
  const Admin = sequelize.define("Admin", {
    email: {
      type: Datatype.STRING,

      allowNull: false,
    },
    password: {
      type: Datatype.STRING,
      allowNull: false,
    },
  });

  return Admin;
};
