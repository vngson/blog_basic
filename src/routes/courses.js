const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.put('/save-change/:slug', courseController.saveChange)
router.put('/restore/:slug', courseController.restore)
router.get('/update/:slug', courseController.update)
router.delete('/delete/:slug', courseController.delete)
router.delete('/delete/:slug/force', courseController.forceDelete)
router.post('/handle-form-actions', courseController.handleFormActions)
router.get('/:slug', courseController.show)

module.exports = router;