const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({deleted:true})])
            .then(([courses, countDeleted]) => { 
                res.render('me/stored-courses', {
                    countDeleted,
                    courses: multipleMongooseToObject(courses),
                })
            })
            .catch(next);

        // Course.countDocumentsWithDeleted({deleted:true})
        //     .then(courses => {
        //         res.render('me/stored-courses', {courses: multipleMongooseToObject(courses),})
        //     })
        //     .catch(()=>{});
    
        // Course.find({})
        //     .then(courses => {
        //         res.render('me/stored-courses', {courses: multipleMongooseToObject(courses),})
        //     })
        //     .catch(next);
    }

    // [GET] me/recycled/courses
    recycledCourses(req, res, next) {
        Course.findWithDeleted({deleted:true})
            .then(courses => {
                res.render('me/recycled-courses', {courses: multipleMongooseToObject(courses),})
            })
            .catch(next);
    }

    // [GET] me/stored/news
    storedNews(req, res, next) {
        res.render('me/stored-news')
    }

}

module.exports = new MeController;
