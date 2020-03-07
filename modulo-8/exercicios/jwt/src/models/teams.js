module.exports = (sequelize, DataTypes) =>
  sequelize.define('teams', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    coach: DataTypes.STRING,
    shieldUrl: DataTypes.STRING,
    birthYear: DataTypes.INTEGER(4)
  })
