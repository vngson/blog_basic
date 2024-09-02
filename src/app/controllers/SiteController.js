const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SideController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {courses: multipleMongooseToObject(courses),})
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL!');
    }
}

module.exports = new SideController;
