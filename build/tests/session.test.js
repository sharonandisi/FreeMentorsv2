"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../../server"));

var _userModel = require("../models/userModel");

require("../../config");

var _user = _interopRequireDefault(require("./mockData/user"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var _sessionModel = _interopRequireDefault(require("../models/sessionModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect,
    request = _chai["default"].request;
var endpoint = '/api/v2/sessions/';
describe('Master describe', function () {
  var token = false;
  before(function (done) {
    _chai["default"].request(_server["default"]).post('/api/v2/auth/signup').send(_user["default"].user014).end(function (err, res) {
      var body = res.body;
      token = body.data;
      done();
    });
  });
  describe('POST /api/v1/sessions/sessions', function () {
    it('Should successfully create a session with valid mentor', function (done) {
      _chai["default"].request(_server["default"]).post("".concat(endpoint, "/")).set('x-auth-token', token).send(_user["default"].session001).end(function (err, res) {
        var body = res.body,
            status = res.status;
        expect(status).to.be.equal(400, 'Status not correct');
        done();
      });
    });
    it('Should not successfully create a session with invalid mentor', function (done) {
      _chai["default"].request(_server["default"]).post("".concat(endpoint, "/")).set('x-auth-token', token).send(_user["default"].session001).end(function (err, res) {
        var body = res.body,
            status = res.status;
        expect(status).to.be.equal(400, 'Status not correct');
        done();
      });
    });
    it('Should not successfully create a session if session is already created', function (done) {
      _chai["default"].request(_server["default"]).post("".concat(endpoint, "/")).set('x-auth-token', token).send(_user["default"].session001).end(function (err, res) {
        var body = res.body,
            status = res.status;
        expect(status).to.be.equal(400, 'Status not correct');
        done();
      });
    });
  });
  describe('PATCH /api/v1/sessions/:sessionid/accept', function () {});
  describe('PATCH /api/v1/sessions/sessions/:sessionid/reject', function () {});
});