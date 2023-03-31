let book = require('../models/bookingSchema');

// booking  add krne  wali api 
const addBooking = async (req, res) => {
    console.log("new booking **", req.body);
    const newbooking = new book(req.body);
    await newbooking.save()
    res.status(201).json({
        success: true,
        message: "Booking added successully",
    })

}

// Update Booking details

const BookingInfoEdit = async (req, res) => {
    console.log(req.params.id);
    try {
        const update = await book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(update);


    } catch (error) {
        res.send("error" + error)
    }
}

// Delete booking

const deleteBooking = async (req, res) => {
    await book.findByIdAndDelete(req.params.id);
    try {
        res.status(202).send({
            success: true,
            message: 'Booking  Deleted Successfuly'
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Booking not deleted please try again" + error
        })
    }
}

// get All booking details

const allBookings = async (req, res) => {
    const allbookings = await book.find()
    res.status(200).send({
        success: true,
        message: "all Booking are find successfully  list  below",
        userData: allbookings,
    })
}
// get one booking  details


const onebooking = async (req, res) => {
    const singleBooking = await book.findById(req.params.id)
    res.status(200).send({
        success: true,
        message: "all customer are find successfully  list  below",
        userData: singleBooking,
    })
}


module.exports = {
    addBooking,
    BookingInfoEdit,
    deleteBooking,
    allBookings,
    onebooking,
}