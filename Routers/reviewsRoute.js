const { Reviews } = require('../Models/reviewsModel');
const router = require('express').Router();

const getReviews = async (req, res) => {
    const reviews = await Reviews.find({});
    res.status(200).send(reviews);
}
router.route('/reviews')
    .get(getReviews);

module.exports = router;