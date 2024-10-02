const mongoose = require('mongoose');


const countrySchema = new mongoose.Schema({
    countryname: {
        type: String,
        required: true
    }
})


const Country = mongoose.model("Country", countrySchema);
module.exports = Country;