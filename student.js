const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    registerNumber: String,
    phone: String,
    location: String
});

module.exports = mongoose.model("Student", studentSchema);
