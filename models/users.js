module.exports = function(sequelize, DataTypes) {
  const USERS = sequelize.define("Users", {
    username: {
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
