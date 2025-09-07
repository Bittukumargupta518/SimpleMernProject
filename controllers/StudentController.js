
const Student = require('../models/Student');
const cloudinary = require('cloudinary').v2;
async function addStudent(req,res) {
    try {
        let student = new Student(req.body);
        if(req.file){
            cloudinary.config({
                cloud_name: 'drnvlgwqj',
                api_key: '417795164491786',
                api_secret: 'jj2l17C43UzspATgef07Cf08ZAY'
            })
            const result = await cloudinary.uploader.upload(req.file.path);
            student.studentImage = result.secure_url;   
        }
        await student.save();
        let students = await Student.find({});
        res.render('studentlist',{
            students: students
        });
    } catch (err) {
        console.log(err);
    }
}

async function deleteStudent(req,res) {
  try{
    let studentId = req.params._id;
    console.log(studentId,'deleteStudent');
    await Student.deleteOne({_id: studentId});
    let students = await Student.find({});
    res.render('welcomeadmin',{
      students: students
    })

  }catch(err){
    console.log(err)
  }
  
}
async function openEditpage(req,res) {
  try{
    let studentId = req.params._id;
    let student = await Student.findOne({_id: studentId});
    if(student){
      res.render('studenteditpage',{
        student: student
      })
         
    }else{
      res.render('/');
    }
    

  }catch(err){

  }
}
async function updateStudent(req, res) {
  try {
    let studentId = req.params._id;
    console.log(studentId, 'updateStudent');
    console.log('Updated Data:', req.body);

    await Student.findByIdAndUpdate(studentId, req.body);

    // fetch updated list
    let students = await Student.find({});
    res.render('studentlist', {
      students: students
    });

    console.log("student updated successfully...");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  addStudent,
  deleteStudent,
  openEditpage,
  updateStudent   
};

// /edit/student/:_id