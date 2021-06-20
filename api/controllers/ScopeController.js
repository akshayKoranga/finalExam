const Scope = require('../models/Scope');

const ScopeController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const country = await Scope.create({body
        });

        return res.status(200).json({ country });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const scope = await Scope.findAll();

      return res.status(200).json({ scope });
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

module.exports = ScopeController;
