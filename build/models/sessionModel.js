"use strict";

var _dbConnect = _interopRequireDefault(require("../db/dbConnect"));

var _queries = _interopRequireDefault(require("../helpers/queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function sessionCreate(_x, _x2) {
  return _sessionCreate.apply(this, arguments);
}

function _sessionCreate() {
  _sessionCreate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, menteeEmail) {
    var mentorid, questions, values, _ref2, rows;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mentorid = _ref.mentorid, questions = _ref.questions;
            values = [mentorid, menteeEmail, questions];
            _context.next = 4;
            return (0, _dbConnect["default"])(_queries["default"].sessions.postSession, values);

          case 4:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            return _context.abrupt("return", rows[0]);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sessionCreate.apply(this, arguments);
}

function findOne(_x3) {
  return _findOne.apply(this, arguments);
}

function _findOne() {
  _findOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id) {
    var values, _ref3, rows;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            values = [id];
            _context2.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].sessions.findOne, values);

          case 3:
            _ref3 = _context2.sent;
            rows = _ref3.rows;

            if (!rows) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", rows[0]);

          case 7:
            return _context2.abrupt("return", false);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findOne.apply(this, arguments);
}

function findmenteeSession(_x4) {
  return _findmenteeSession.apply(this, arguments);
}

function _findmenteeSession() {
  _findmenteeSession = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(id) {
    var values, _ref4, rows;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            values = [id];
            _context3.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].sessions.findmenteeSession, values);

          case 3:
            _ref4 = _context3.sent;
            rows = _ref4.rows;

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
  return _findmenteeSession.apply(this, arguments);
}

function findmentorSession(_x5) {
  return _findmentorSession.apply(this, arguments);
}

function _findmentorSession() {
  _findmentorSession = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(id) {
    var values, _ref5, rows;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            values = [id];
            _context4.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].sessions.findmentorSession, values);

          case 3:
            _ref5 = _context4.sent;
            rows = _ref5.rows;

            if (!rows) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", rows);

          case 7:
            return _context4.abrupt("return", false);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _findmentorSession.apply(this, arguments);
}

function decline(_x6) {
  return _decline.apply(this, arguments);
}

function _decline() {
  _decline = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(id) {
    var values, _ref6, rows;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            values = [id];
            _context5.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].sessions.decline, values);

          case 3:
            _ref6 = _context5.sent;
            rows = _ref6.rows;
            return _context5.abrupt("return", rows[0]);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _decline.apply(this, arguments);
}

function accept(_x7) {
  return _accept.apply(this, arguments);
}

function _accept() {
  _accept = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(id) {
    var values, _ref7, rows;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            values = [id];
            _context6.next = 3;
            return (0, _dbConnect["default"])(_queries["default"].sessions.accept, values);

          case 3:
            _ref7 = _context6.sent;
            rows = _ref7.rows;
            return _context6.abrupt("return", rows[0]);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _accept.apply(this, arguments);
}

module.exports = {
  sessionCreate: sessionCreate,
  findOne: findOne,
  findmenteeSession: findmenteeSession,
  findmentorSession: findmentorSession,
  decline: decline,
  accept: accept
};