module.exports = (sequelize, DataTypes) =>
  sequelize.define('instructors', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    level: DataTypes.ENUM('Júnior', 'Pleno', 'Sênior', 'Especialista'),
    company: DataTypes.STRING,
    title: DataTypes.STRING
  })
