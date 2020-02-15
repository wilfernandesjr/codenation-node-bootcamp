module.exports = (sequelize, DataTypes) =>
  sequelize.define('students', {
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
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
    level: DataTypes.ENUM('Júnior', 'Pleno', 'Sênior', 'Especialista')
  })
