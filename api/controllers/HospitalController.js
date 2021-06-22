const Hospital = require('../models//Hospital');
// const Hospital = require('../models/Hospital');

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
      // let allHospital = []
      // for (const element of Hospitals){
      //   let Hospital = element.dataValues
      //   const hospital = await Hospital.findAll({where :{Hospital_id : Hospital.id}});
      //   Hospital.countries = hospital;
      //   allHospital.push(Hospital)
      // }
      return res.status(200).json({ Hospitals });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const edit = async (req, res) => {
    try {
        const { body } = req;
        const id = body.id
        delete body.hospital_id;
        const Hospital = await Hospital.update(body,{
          where: { id: body.id },
        });
      return res.status(200).json({ msg: 'Hospital Updated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteHospital = async (req, res) => {
    try {
        const { body } = req;
        const id = body.id
        let hospital = await Hospital.findOne({where: {id: id}})

       hospital.destroy();
        
      return res.status(200).json({ msg: 'Hospital deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
    edit,
    deleteHospital

  };
};

module.exports = HospitalController;