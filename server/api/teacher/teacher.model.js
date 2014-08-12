'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeacherSchema = new Schema({
  branchId: Number,
  id: Number,
  firstname: String,
  lastname: String,
  nickname: String,
  phones: [{
    label: String,
    value: String,
    isPrimary: Boolean
  }],
  emails: [{
    label: String,
    value: String,
    isPrimary: Boolean
  }],
  status: Number
});

module.exports = mongoose.model('Teacher', TeacherSchema);