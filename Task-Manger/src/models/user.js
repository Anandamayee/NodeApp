const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('Age must be a positive number.')
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Please enter a valid email');
        }
    },
    password: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 8,
        validate(value) {
            let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!reg.test(value)) throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character: ')
        }

    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.findByCredentials = async (credential) => {
    let user = await User.findOne({ email: credential.email });
    if (!user) throw new Error('Please enter a valid credential');
    let isMatch = await bcrypt.compare(credential.password, user.password);
    if (!isMatch) throw new Error('Please enter a valid credential');
    return user;
}

userSchema.methods.generateToken = async function () {
    let user = this;
    let token = jwt.sign({ _id: user._id.toString() }, 'MyIdentity');
    user.tokens=user.tokens.concat({token});
    await user.save({ validateModifiedOnly: true });
    return token;

}

// arrow functions don't binnd this - hence normal function is used
// next is called when execution is done . if not called then it will keep runnning
userSchema.pre('save', async function (next) {
    let user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();

});


const User = mongoose.model('User', userSchema);

module.exports = User;