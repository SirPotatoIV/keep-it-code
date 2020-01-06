module.exports = function(sequelize, DataTypes) {
  const USERS = sequelize.define("Articles", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return USERS;
};
