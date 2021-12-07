const { Services } = require('../Models/servicesModel');
const router = require('express').Router();

//GET ALL SERVICES
const getServices = async (req, res) => {
    const services = await Services.find({});
    res.status(200).send(services);
}

//POST A SERVICE
const postServices = async (req, res) => {
    const { body } = req;
    const result = await new Services(body);
    await result.save();
    res.status(200).send(result);
}

router.route('/services')
    .get(getServices);
router.route('/services')
    .post(postServices)

module.exports = router;