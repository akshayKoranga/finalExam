const Role = require('../../models/Role');
const Country = require('../../models/Country');
const Market = require('../../models/Market');
const Scope = require('../../models/Scope');


const DevSeed = () => {
    const firstSeed = async () => {
    let roles = [{
        role_name : 'Market Tool Manager',
        role_alias: 'MTM'
    },{
        role_name : 'Global Tool Manager',
        role_alias: 'GTM'
    },{
        role_name : 'Questions & Requests',
        role_alias: 'Q&R'
    },{
        role_name : 'Business Unit',
        role_alias: 'BIU'
    },{
        role_name : 'Field Service Engineer',
        role_alias: 'FSE'
    }]
    const roleInsert = await Role.bulkCreate(roles);

    let markets = [{
        market_name : 'India',
    },{
        market_name : 'USA',
    },{
        market_name : 'Europe',
    },{
        market_name : 'China',
    }]
   const marketinsert = await Market.bulkCreate(markets);

    let countries = [{
        country_name : 'India',
        market_id:1
    },{
        country_name : 'Bangladesh',
        market_id:1
    },{
        country_name : 'Sri Lanka',
        market_id:1
    },{ 
        country_name : 'USA',
        market_id:2
    },{ 
        country_name : 'Canada',
        market_id:2
    },{
        country_name : 'Europe', 
        market_id:3
    },{
        country_name : 'Germany', 
        market_id:3
    },{
        country_name : 'Netherlands', 
        market_id:3
    },{
        country_name : 'China',
        market_id:4
    }]
    const countryInsert = await Country.bulkCreate(countries);


    let scope= [{
        scope_name : 'Local'
    },{
        scope_name : 'Global'
    }]
    const scopeInsert = await Scope.bulkCreate(scope);

    return 1
}

  
    return {
        firstSeed,
    };
  };
module.exports = DevSeed;
  