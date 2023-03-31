const express = require('express')
const router = express.Router()
const booking = require('../controllers/bookingcontroller')

router.get("/allbooking", booking.allBookings);
router.get("/onebooking/:id", booking.onebooking);
router.post("/addbooking", booking.addBooking);
router.patch("/editbooking/:id", booking.BookingInfoEdit);
router.delete("/deletebooking/:id", booking.deleteBooking);

module.exports = router