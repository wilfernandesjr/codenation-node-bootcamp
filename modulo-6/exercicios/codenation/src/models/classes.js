module.exports = (sequelize, DataTypes) =>
  sequelize.define('classes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    github: DataTypes.STRING,
    company: DataTypes.STRING,
    start: DataTypes.DATE,
    finish: DataTypes.DATE
  })
