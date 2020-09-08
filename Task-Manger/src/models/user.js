const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
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

    }
});

module.exports = User;