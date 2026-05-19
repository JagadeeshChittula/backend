const express = require("express");

const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');

const {

    createstudent,
    readStudents,
    readsingleStudent,
    updatestudent,
    deletestudent,
    registerstudents,
    loginstudents

} = require('../controllers/studentcontroller');


// STATIC ROUTES FIRST

router.post("/students/add", createstudent);

router.post("/students/register", registerstudents);

router.post("/login", loginstudents);

router.get("/", verifyToken, readStudents);

router.put("/students/update/:id", updatestudent);

router.delete("/students/:id", deletestudent);


// DYNAMIC ROUTE ALWAYS LAST

router.get("/students/:id", readsingleStudent);

module.exports = router;