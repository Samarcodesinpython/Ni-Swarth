//Ni-Swarth/model/Users.cjs

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  // Use consistent collection name
  module.exports = mongoose.model('User', UserSchema, 'users'); // all lowercase
