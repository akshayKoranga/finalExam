const Hospital = require('../models//Hospital');
// const Country = require('../models/Country');

const HospitalController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const Hospital = await Hospital.create({body
        });

        return res.status(200).json({ Hospital });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const Hospitals = await Hospital.findAll();
      let allHospital = []
      for (const element of Hospitals){
        let Hospital = element.dataValues
        const country = await Country.findAll({where :{Hospital_id : Hospital.id}});
        Hospital.countries = country;
        allHospital.push(Hospital)
      }
      return res.status(200).json({ Hospitals });
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

module.exports = HospitalController;