"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../../server"));

var _userModel = require("../models/userModel");

require("../../config");

var _user = _interopRequireDefault(require("./mockData/user"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expect = _chai["default"].expect;

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var userid = false;
describe('/Auth', function () {
  describe('/POST signup', function () {
    it('successfully sign up user', function (done) {
      var user001 = _user["default"].user001;

      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(user001).end(function (err, res) {
        res.should.have.status(201);
        userid = res.body.id;
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing a firstname', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user002).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing a lastname', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user003).end(function (err, res) {
        res.should.have.status(400);
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing an email address', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user004).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing a password', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user005).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing an address', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user006).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing a bio', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user007).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing an occupation', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user008).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign up a user missing an expertise', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user009).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
  });
  describe('/POST signin', function () {
    it('should successfully sign in a user', function (done) {
      var user010 = _user["default"].user010;

      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(user010).end(function (err, res) {
        res.should.have.status(200);
        if (err) return done();
        done();
      });
    });
    it('should not sign in a user missing an email address', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(_user["default"].user011).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign in a user missing a password', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(_user["default"].user012).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
    it('should not sign in a user that is not registered', function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(_user["default"].user013).end(function (err, res) {
        expect(res).to.have.status(400);
        if (err) return done();
        done();
      });
    });
  });
  describe('PATCH /api/v2/auth/:userid', function () {
    var token = false;
    var usertoken = false;
    before(function (done) {
      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(_user["default"].admin001).end(function (err, res) {
        var body = res.body;
        token = body.data;
      });

      _chai["default"].request(_server["default"]).post('/api/v2/auth/signin').send(_user["default"].user014).end(function (err, res) {
        var body = res.body;
        usertoken = body.data;
        done();
      });
    });
    it('should not allow an admin access with no token', function (done) {
      _chai["default"].request(_server["default"]).patch('/api/v2/auth/' + userid).end(function (err, res) {
        var body = res.body,
            status = res.status;
        expect(status).to.be.equal(401, 'Incorrect status');
        done();
      });
    });
    it('should not allow an admin access with invalid token', function (done) {
      _chai["default"].request(_server["default"]).patch('/api/v2/auth/' + userid).end(function (err, res) {
        var body = res.body,
            status = res.status;
        expect(status).to.be.equal(401, 'Incorrect status');
        done();
      });
    });
  });
});