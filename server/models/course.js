const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
  price: Number,
  // sections: {
  //   title: String,
  //   videoUrl: String,
  // }
  videoUrl: String,
  reviews: [{
    rating: Number,
    comment: String,
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
  }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;