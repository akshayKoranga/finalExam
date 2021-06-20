const Country = require('../models/Country');

const CountryController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const country = await Country.create({body
        });

        return res.status(200).json({ country });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const country = await Country.findAll();

      return res.status(200).json({ country });
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

module.exports = CountryController;
