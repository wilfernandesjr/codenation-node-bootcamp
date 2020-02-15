module.exports = (sequelize, DataTypes) =>
  sequelize.define('students', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkedin: DataTypes.STRING
  })
