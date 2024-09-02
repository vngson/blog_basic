const Course = require('../models/Course');
const { onlyMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {course: onlyMongooseToObject(course),})
            })
            .catch(next);
    }

    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save()
                .then(() => res.redirect("/me/stored/courses"))
                .catch(next);
    }

    // [POST] courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action){
            case 'delete':{
                Course.delete({ _id: {$in: req.body.courseIds} })
                        .then(() => res.redirect("back"))
                        .catch(next);
                break;
            }
            case 'restore':{
                Course.restore({ _id: {$in: req.body.courseIds} })
                        .then(() => res.redirect("back"))
                        .catch(next);
                break;
            }
            case 'force':{
                Course.deleteMany({ _id: {$in: req.body.courseIds} })
                        .then(() => res.redirect("back"))
                        .catch(next);
                break;
            }
            default:
                res.json({ message: "Action invalid"});
                break;
        }
    }

    // [PUT] courses/save-change
    saveChange(req, res, next) {
        Course.updateOne({ _id: req.params.slug }, req.body)
                .then(() => res.redirect("/me/stored/courses"))
                .catch(next);
    }

    // [PUT] courses/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.slug })
            .then(() => res.redirect("back"))
            .catch(next);
    }
    
    // [GET] courses/update
    update(req, res, next) {
        Course.findOne({ _id: req.params.slug })
            .then(course => {
                console.log(onlyMongooseToObject(course));
                res.render('courses/update', {course: onlyMongooseToObject(course),})
            })
            .catch(next);
    }

    // [DELETE] courses/delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.slug })
                .then(() => res.redirect("/me/stored/courses"))
                .catch(next);
    }

    // [DELETE] courses/delete-force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.slug })
                .then(() => res.redirect("/me/stored/courses"))
                .catch(next);
    }

}

module.exports = new CourseController;
