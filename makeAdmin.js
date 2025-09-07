const User = require('./models/User');
const bcrypt = require('bcrypt');

async function makeAdmin() {
    try {
        let user = await User.findOne({ email:'bittu@abc.com'});
        if(!user){
            user = new User();
            user.firstName = 'bittu';
            user.lastName = 'gupta';
            user.email = 'bittu@abc.com';
            user.password = bcrypt.hashSync('12345',10);
            user.userType = 'admin';
            await user.save();
            console.log('admin created...');
        }else{
            console.log('admin exists...');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = makeAdmin;