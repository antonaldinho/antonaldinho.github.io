
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    validate(value) {
      if ( value < 13 ) {
        throw new Error('Debes ser mayor de 13 años')
      }
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if(!validator.isEmail(value)) {
        throw new Error('Email invalido')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  }
})

userSchema.statics.findByCredentials = function(email, password) {
  return new Promise(function(resolve, reject) {
    User.findOne({email}).then(function(user) {
      if (!user) {
        return reject('User does not exist');
      }
      bcrypt.compare(password, user.password).then(function(match) {
        return resolve(user);
      }).catch(function(error) {
        return reject('Wrong password');
      })
    })
  })
}

userSchema.methods.generateToken = function() {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, 'superSecret', {expiresIn: '7 days'});
  return token;
}

userSchema.pre('save', function(next) {
  const user = this
  if(user.isModified('password')) {
    bcrypt.hash(user.password, 8).then(function(hash) {
      user.password = hash;
      next();
    }).catch(function(error) {
      return next(error);
    })
  }
  else {
    next();
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User

