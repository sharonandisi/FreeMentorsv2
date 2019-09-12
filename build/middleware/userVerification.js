"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = require("../models/userModel");

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

require("../../config");

var _messageHelper = _interopRequireDefault(require("../helpers/messageHelper"));

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function verifyUser(_x, _x2, _x3) {
  return _verifyUser.apply(this, arguments);
}

function _verifyUser() {
  _verifyUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _userModel.findByEmail)(req.body.email);

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.auth.emailUnavailable));

          case 5:
            return _context.abrupt("return", next());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _verifyUser.apply(this, arguments);
}

function verifyRegistereduser(_x4, _x5, _x6) {
  return _verifyRegistereduser.apply(this, arguments);
}

function _verifyRegistereduser() {
  _verifyRegistereduser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _userModel.findByEmail)(req.body.email);

          case 2:
            user = _context2.sent;

            if (user) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.failed.signinFail));

          case 5:
            return _context2.abrupt("return", next());

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _verifyRegistereduser.apply(this, arguments);
}

function verifyexistingUser(_x7, _x8, _x9) {
  return _verifyexistingUser.apply(this, arguments);
}

function _verifyexistingUser() {
  _verifyexistingUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res, next) {
    var userid, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userid = req.decoded.userid;
            _context3.next = 3;
            return userModel.findOne(userid);

          case 3:
            user = _context3.sent;

            if (user) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.auth.notUSer));

          case 6:
            return _context3.abrupt("return", next());

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _verifyexistingUser.apply(this, arguments);
}

function verifyPassword(_x10, _x11, _x12) {
  return _verifyPassword.apply(this, arguments);
}

function _verifyPassword() {
  _verifyPassword = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res, next) {
    var user;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _userModel.findByEmail)(req.body.email);

          case 2:
            user = _context4.sent;

            if (_authHelper["default"].comparePassword(user.password, req.body.password)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", (0, _responseHelper["default"])(res, 401, _messageHelper["default"].users.auth.invalidPassword));

          case 5:
            return _context4.abrupt("return", next());

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _verifyPassword.apply(this, arguments);
}

function verifyauthenUser(_x13, _x14, _x15) {
  return _verifyauthenUser.apply(this, arguments);
}

function _verifyauthenUser() {
  _verifyauthenUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res, next) {
    var token;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            token = req.header('x-auth-token');

            if (token) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", (0, _responseHelper["default"])(res, 401, _messageHelper["default"].users.auth.tokenFailure));

          case 3:
            _jsonwebtoken["default"].verify(token, process.env.SECRET, function (error, decoded) {
              if (error) {
                return (0, _responseHelper["default"])(res, 401, _messageHelper["default"].users.auth.tokenFailure);
              }

              req.decoded = decoded;
            });

            return _context5.abrupt("return", next());

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _verifyauthenUser.apply(this, arguments);
}

function verifyAdmin(_x16, _x17, _x18) {
  return _verifyAdmin.apply(this, arguments);
}

function _verifyAdmin() {
  _verifyAdmin = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res, next) {
    var _req$decoded, isadmin, id;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$decoded = req.decoded, isadmin = _req$decoded.isadmin, id = _req$decoded.id;

            if (isadmin) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", (0, _responseHelper["default"])(res, 403, _messageHelper["default"].users.auth.access));

          case 3:
            if (!(id == req.params.id)) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.auth.selfChangementor));

          case 5:
            return _context6.abrupt("return", next());

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _verifyAdmin.apply(this, arguments);
}

function checkmentorStatus(_x19, _x20, _x21) {
  return _checkmentorStatus.apply(this, arguments);
}

function _checkmentorStatus() {
  _checkmentorStatus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res, next) {
    var mentorid, mentor;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            mentorid = req.body.mentorid;
            _context7.next = 3;
            return (0, _userModel.findOne)(mentorid);

          case 3:
            mentor = _context7.sent;

            if (!(!mentor || !mentor.mentorstatus)) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.auth.mentorStatus));

          case 6:
            return _context7.abrupt("return", next());

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _checkmentorStatus.apply(this, arguments);
}

function verifyMentor(_x22, _x23, _x24) {
  return _verifyMentor.apply(this, arguments);
}

function _verifyMentor() {
  _verifyMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res, next) {
    var mentorid, mentor;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            mentorid = req.decoded.id;
            _context8.next = 3;
            return (0, _userModel.findOne)(mentorid);

          case 3:
            mentor = _context8.sent;

            if (mentor.mentorstatus) {
              _context8.next = 6;
              break;
            }

            return _context8.abrupt("return", (0, _responseHelper["default"])(res, 403, _messageHelper["default"].users.auth.access));

          case 6:
            return _context8.abrupt("return", next());

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _verifyMentor.apply(this, arguments);
}

function checkIfMentor(_x25, _x26, _x27) {
  return _checkIfMentor.apply(this, arguments);
}

function _checkIfMentor() {
  _checkIfMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res, next) {
    var mentorid, _ref, mentorstatus;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            mentorid = req.params.id;

            if (!(parseInt(mentorid) < 1 || parseInt(mentorid) > 1000 || typeof mentorid !== 'number')) {
              _context9.next = 3;
              break;
            }

            return _context9.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.failed.failed));

          case 3:
            _context9.next = 5;
            return (0, _userModel.findOne)(mentorid);

          case 5:
            _ref = _context9.sent;
            mentorstatus = _ref.mentorstatus;

            if (!mentorstatus) {
              _context9.next = 9;
              break;
            }

            return _context9.abrupt("return", (0, _responseHelper["default"])(res, 409, _messageHelper["default"].users.mentors.mentorChangeConflict));

          case 9:
            return _context9.abrupt("return", next());

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _checkIfMentor.apply(this, arguments);
}

module.exports = {
  verifyUser: verifyUser,
  verifyRegistereduser: verifyRegistereduser,
  verifyexistingUser: verifyexistingUser,
  verifyPassword: verifyPassword,
  verifyauthenUser: verifyauthenUser,
  verifyAdmin: verifyAdmin,
  checkmentorStatus: checkmentorStatus,
  verifyMentor: verifyMentor,
  checkIfMentor: checkIfMentor
};