const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  RollNo:{type: String,required: true},
  StudentName: {type: String},
  MotherName: {type: String },
  FatherName:{type: String,required: true},
  Course:{type: String,required:true},
  Branch:{type: String,},
  YearofAddmission:{type: String,},
  studentImage: {type: String},
  createdAt: Date,
  updatedAt: Date,

  
})
studentSchema.plugin(timestamps,{index:true}),
module.exports = mongoose.model('student',studentSchema);