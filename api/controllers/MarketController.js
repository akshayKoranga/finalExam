const Market = require('../models//Market');
const Country = require('../models/Country');

const MarketController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const market = await Market.create({body
        });

        return res.status(200).json({ market });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const markets = await Market.findAll();
      let allMarket = []
      for (const element of markets){
        let market = element.dataValues
        const country = await Country.findAll({where :{market_id : market.id}});
        market.countries = country;
        allMarket.push(market)
      }
      return res.status(200).json({ markets });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
  };
};

module.exports = MarketController;
