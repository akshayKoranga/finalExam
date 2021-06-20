const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
 
};

const tableName = 'modalities';

const Modality = sequelize.define('modality', {
  market_name: {
    type: Sequelize.STRING,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  updated_by: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 1
  },
  status_reason: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
Modality.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());


  return values;
};

module.exports = Modality;
