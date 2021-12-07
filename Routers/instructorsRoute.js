const { Instructors } = require('../Models/instructorsModel');
const router = require('express').Router();

//GET ALL INSTRUCTORS
const getInstructors = async (req, res) => {
    const instructors = await Instructors.find({});
    res.status(200).send(instructors);
}

//POST A INSTRUCTOR
const postInstructor = async (req, res) => {
    const { body } = req;
    const result = await new Instructors(body);
    await result.save();
    res.status(200).send(result);
}

router.route('/instructors')
    .get(getInstructors);
router.route('/instructorS')
    .post(postInstructor);

module.exports = router