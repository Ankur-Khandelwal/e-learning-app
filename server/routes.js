const router = require("express").Router();
const {signup, login, allCourses, fetchCourse, uploadCourse, deleteCourse, updateCourse, buyCourse, search} = require("./controllers");

router.post('/signup', signup);
router.post('/login', login);
router.get('/allCourses', allCourses);
router.get('/course/:id', fetchCourse);
router.post('/uploadCourse', uploadCourse);
router.post('/deleteCourse', deleteCourse);
router.post('/updateCourse', updateCourse);
router.post('/buyCourse', buyCourse);
router.get('/search', search);




module.exports = router;