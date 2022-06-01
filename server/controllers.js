const signup = (req, res) => {
  res.send('signup');
}

const login = (req, res) => {
  res.send('login');
}

const allCourses = (req, res) => {
  res.send('allcourses');
}

const fetchCourse = (req, res) => {
  res.send('findCourse');
}

const uploadCourse = (req, res) => {
  res.send('uploadCourse');
}

const deleteCourse = (req, res) => {
  res.send('deleteCourse');
}

const updateCourse = (req, res) => {
  res.send('updateCourse');
}

const buyCourse = (req, res) => {
  res.send('buyCourse');
}

const search = (req, res) => {
  res.send('search');
}

module.exports = {signup, login, allCourses, fetchCourse, uploadCourse, deleteCourse, updateCourse, buyCourse, search};