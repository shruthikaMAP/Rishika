const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

// Mark Attendance
router.post("/mark", async (req, res) => {
    try {
        const { studentId, status } = req.body;
        const newAttendance = new Attendance({ studentId, status });
        await newAttendance.save();
        res.json({ message: "Attendance marked successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Attendance Records
router.get("/records", async (req, res) => {
    try {
        const records = await Attendance.find().populate("studentId");
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
