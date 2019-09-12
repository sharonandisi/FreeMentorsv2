"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../../server"));

var _userModel = require("../models/userModel");

require("../../config");

var _user = _interopRequireDefault(require("./mockData/user"));

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var expect = _chai["default"].expect;

_chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

describe('GET /api/v2/mentors/mentors/:mentorid', function () {
  var mentorid = '';
  var token = '';

  var execute = function execute() {
    return _chai["default"].request(_server["default"]).get("/api/v2/mentors/mentors/".concat(mentorid)).set('x-auth-token', token);
  };

  it('should not get a mentor if the user making the request has no token',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = '';
            _context.next = 3;
            return execute();

          case 3:
            res = _context.sent;
            expect(res).to.have.status(401);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not get a mentor if the user has an invalid token',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = 'sha23563rwe';
            _context2.next = 3;
            return execute();

          case 3:
            res = _context2.sent;
            expect(res).to.have.status(401);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
describe('/GET  all mentors', function () {
  var token = '';

  var execute = function execute() {
    return _chai["default"].request(_server["default"]).get('/api/v2/mentors/mentors').set('x-auth-token', token);
  };

  it('should not get mentors when the user has no token',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = '';
            _context3.next = 3;
            return execute();

          case 3:
            res = _context3.sent;
            expect(res).to.have.status(401);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should not get mentors if the user has an invalid token',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var res;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            token = 'sha23563rwe';
            _context4.next = 3;
            return execute();

          case 3:
            res = _context4.sent;
            expect(res).to.have.status(401);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});