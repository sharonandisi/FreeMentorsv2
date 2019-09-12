"use strict";

var _dbConnect = _interopRequireDefault(require("../db/dbConnect"));

var _queries = _interopRequireDefault(require("../helpers/queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function create(_x, _x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, password) {
    var firstname, lastname, email, address, bio, occupation, expertise, values, _ref3, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            firstname = _ref.firstname, lastname = _ref.lastname, email = _ref.email, address = _ref.address, bio = _ref.bio, occupation = _ref.occupation, expertise = _ref.expertise;
            values = [firstname, lastname, email, password, address, bio, occupation, expertise];
            _context.next = 4;
            return (0, _dbConnect["default"])(_queries["default"].users.userSignup, values);

          case 4:
            _ref3 = _context.sent;
            rows = _ref3.rows;
            return _context.abrupt("return", rows[0]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _create.apply(this, arguments);
}

function createAdmin(_x3) {
  return _createAdmin.apply(this, arguments);
}

function _createAdmin() {
  _createAdmin = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref2) {
    var firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin, values, _ref4, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            firstname = _ref2.firstname, lastname = _ref2.lastname, email = _ref2.email, password = _ref2.password, address = _ref2.address, bio = _ref2.bio, occupation = _ref2.occupation, expertise = _ref2.expertise, isAdmin = _ref2.isAdmin;
            values = [firstname, lastname, email, password, address, bio, occupation, expertise, isAdmin];
            _context2.next = 4;
            return (0, _dbConnect["default"])(_queries["default"].users.createAdmin, values);

          case 4:
            _ref4 = _context2.sent;
            rows = _ref4.rows;
            return _context2.abrupt("return", rows[0]);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createAdmin.apply(this, arguments);
}

function findByEmail(_x4) {
  return _findByEmail.apply(this, arguments);
}

function _findByEmail() {
  _findByEmail = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(email) {
    var values, _ref5, rows;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            values = [email];
            _context3.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].users.findByEmail, values);

          case 3:
            _ref5 = _context3.sent;
            rows = _ref5.rows;

            if (!rows) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", rows[0]);

          case 7:
            return _context3.abrupt("return", false);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _findByEmail.apply(this, arguments);
}

function findOne(_x5) {
  return _findOne.apply(this, arguments);
}

function _findOne() {
  _findOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(id) {
    var values, _ref6, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            values = [id];
            _context4.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].users.findOne, values);

          case 3:
            _ref6 = _context4.sent;
            rows = _ref6.rows;

            if (!rows) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", rows[0]);

          case 7:
            return _context4.abrupt("return", false);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _findOne.apply(this, arguments);
}

function changeMentor(_x6) {
  return _changeMentor.apply(this, arguments);
}

function _changeMentor() {
  _changeMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(id) {
    var values, _ref7, rows;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            values = [id];
            _context5.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].users.changeMentor, values);

          case 3:
            _ref7 = _context5.sent;
            rows = _ref7.rows;
            return _context5.abrupt("return", rows[0]);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _changeMentor.apply(this, arguments);
}

function findMentor() {
  return _findMentor.apply(this, arguments);
}

function _findMentor() {
  _findMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var _ref8, rows;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log('here');
            _context6.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].users.findMentor);

          case 3:
            _ref8 = _context6.sent;
            rows = _ref8.rows;

            if (!rows) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", rows);

          case 7:
            return _context6.abrupt("return", false);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _findMentor.apply(this, arguments);
}

module.exports = {
  create: create,
  createAdmin: createAdmin,
  findByEmail: findByEmail,
  findOne: findOne,
  changeMentor: changeMentor,
  findMentor: findMentor
};