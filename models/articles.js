module.exports = function(sequelize, DataTypes) {
  const Articles = sequelize.define("Articles", {
    users_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Articles;
};
