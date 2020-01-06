module.exports = function(sequelize, DataTypes) {
  const Subscribers = sequelize.define("Subscribers", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Subscribers;
};
