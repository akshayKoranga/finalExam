const Booking = require('../models/Booking');
// const Booking = require('../models/Booking');

const BookingController = () => {
  const create = async (req, res) => {
    const { body } = req;
      try {
        const BookingInsert = await Booking.create(body
        );

        return res.status(200).json({ BookingInsert });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  const getAll = async (req, res) => {
    try {
      const Bookings = await Booking.findAll();
      // let allBooking = []
      // for (const element of Bookings){
      //   let Booking = element.dataValues
      //   const booking = await Booking.findAll({where :{Booking_id : Booking.id}});
      //   Booking.countries = booking;
      //   allBooking.push(Booking)
      // }
      return res.status(200).json({ Bookings });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const edit = async (req, res) => {
    try {
        const { body } = req;
        const Booking = await Booking.update(body,{
          where: { id: body.id },
        });
      return res.status(200).json({ msg: 'Booking Updated' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const deleteBooking = async (req, res) => {
    try {
        const { query } = req;
        const id = query.id
        let booking = await Booking.findOne({where: {id: id}})

       booking.destroy();
        
      return res.status(200).json({ msg: 'Booking deleted' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    create,
    getAll,
    edit,
    deleteBooking

  };
};

module.exports = BookingController;