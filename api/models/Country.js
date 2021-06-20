const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
 
};

const tableName = 'countries';

const Country = sequelize.define('country', {
  country_name: {
    type: Sequelize.STRING,
  },
  market_id: {
    type: Sequelize.INTEGER,
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
Country.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Country;
