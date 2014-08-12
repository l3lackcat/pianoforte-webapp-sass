'use strict';

var _ = require('lodash');
var Teacher = require('./teacher.model');

// Get list of teachers
exports.index = function(req, res) {
  var branchId = req.params.branchId;

  Teacher.find({ branchId: branchId }, { emails: false }, function (err, teachers) {
    if(err) { return handleError(res, err); }
    return res.json(200, teachers);
  });
};

// Get a single teacher
exports.show = function(req, res) {
  var branchId = req.params.branchId;
  var teacherId = req.params.teacherId;
  
  Teacher.findOne({ branchId: branchId, id: teacherId }, function (err, teacher) {
    if(err) { return handleError(res, err); }
    if(!teacher) { return res.send(404); }
    return res.json(teacher);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}