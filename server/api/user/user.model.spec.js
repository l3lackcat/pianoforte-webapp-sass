'use strict';

var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  username: 'test000',
  password: 'password',
  provider: 'local',
  branchId: 1,
  status: 1
});

describe('User Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate user', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an username', function(done) {
    user.username = '';
    user.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("should authenticate user if password is valid", function() {
    user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    user.authenticate('blah').should.not.be.true;
  });
});