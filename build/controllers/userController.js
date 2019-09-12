"use strict";

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

var _userModel = require("../models/userModel");

var _messageHelper = _interopRequireDefault(require("../helpers/messageHelper"));

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Create(_x, _x2) {
  return _Create.apply(this, arguments);
}

function _Create() {
  _Create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var body, hashpassword, rows, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = req.body;
            _context.prev = 1;
            hashpassword = _authHelper["default"].hashPassword(body.password);
            _context.next = 5;
            return (0, _userModel.create)(body, hashpassword);

          case 5:
            rows = _context.sent;
            console.log(rows);
            token = _authHelper["default"].generateToken(rows);
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 201, _messageHelper["default"].users.auth.userSignup, token));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);

            if (!(_context.t0.routine === '_bt_check_unique')) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.auth.emailUnavailable));

          case 15:
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 500, _messageHelper["default"].users.failed.catchError));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _Create.apply(this, arguments);
}

function login(_x3, _x4) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var email, rows, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = req.body.email;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _userModel.findByEmail)(email);

          case 4:
            rows = _context2.sent;
            token = _authHelper["default"].generateToken(rows);
            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].users.auth.userSignin, token));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.failed.failed));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _login.apply(this, arguments);
}

function ChangeMentor(_x5, _x6) {
  return _ChangeMentor.apply(this, arguments);
}

function _ChangeMentor() {
  _ChangeMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var rows, mentorstatus;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _userModel.changeMentor)(req.params.id);

          case 3:
            rows = _context3.sent;
            mentorstatus = rows.mentorstatus;
            return _context3.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].users.mentors.changeMentor, {
              mentorstatus: mentorstatus
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _responseHelper["default"])(res, 500, _messageHelper["default"].users.failed.catchError));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _ChangeMentor.apply(this, arguments);
}

module.exports = {
  Create: Create,
  login: login,
  ChangeMentor: ChangeMentor
};