"use strict";

var _userModel = require("../models/userModel");

var _authHelper = _interopRequireDefault(require("../helpers/authHelper"));

require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CreateAdmin(_x, _x2, _x3) {
  return _CreateAdmin.apply(this, arguments);
}

function _CreateAdmin() {
  _CreateAdmin = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var rows, hashpassword;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _userModel.findByEmail)(process.env.ADMIN_EMAIL);

          case 2:
            rows = _context.sent;
            hashpassword = _authHelper["default"].hashPassword(process.env.ADMIN_PASSWORD);

            if (!rows) {
              (0, _userModel.createAdmin)({
                firstname: 'admin',
                lastname: 'admin',
                email: process.env.ADMIN_EMAIL,
                password: hashpassword,
                address: 'Nairobi',
                occupation: 'Admin',
                expertise: 'admin',
                bio: 'I am an admin',
                isAdmin: true
              });
            }

            next();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _CreateAdmin.apply(this, arguments);
}

;
module.exports = {
  CreateAdmin: CreateAdmin
};