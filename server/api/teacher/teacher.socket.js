/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var teacher = require('./teacher.model');

exports.register = function(socket) {
  teacher.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  teacher.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('teacher:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('teacher:remove', doc);
}