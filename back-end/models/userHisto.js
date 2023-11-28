module.exports = (sequelize, Datatype) => {
    const userHisto = sequelize.define("userHisto", {
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
      Date :{
        type : Date,
        allowNull: false,
      }

    });
  
    userHisto.associate = (models) => {
      userHisto.belongsTo(models.Seller, {
        onDelete: "cascade",
      });
    };
    return userHisto;
  };
  