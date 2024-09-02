const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController')

router.get('/stored/courses', meController.storedCourses)
router.get('/recycled/courses', meController.recycledCourses)
router.get('/stored/news', meController.storedNews)

module.exports = router;