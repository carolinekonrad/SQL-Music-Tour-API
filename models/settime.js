'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class setTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Band, Event, Stage) {
      // define association here
      setTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      setTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      setTime.belongsTo(Stage, {
        foreignKey: "stage_id", 
        as: "stage"
      })
    }
  }
  setTime.init({
    set_time_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  })
  return setTime;
};