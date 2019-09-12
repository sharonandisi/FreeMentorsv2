"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTables;

var _dbConnect = _interopRequireDefault(require("./dbConnect"));

var _queries = _interopRequireDefault(require("../helpers/queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var tableQueries = [_queries["default"].createTables.userTable, _queries["default"].createTables.sessionTable];

function createTables() {
  return _createTables.apply(this, arguments);
}

function _createTables() {
  _createTables = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return tableQueries.reduce(
            /*#__PURE__*/
            function () {
              var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(promise, tableQuery) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return promise;

                      case 2:
                        _context.next = 4;
                        return (0, _dbConnect["default"])(tableQuery);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }(), Promise.resolve());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createTables.apply(this, arguments);
}

module.exports = {
  createTables: createTables
};

require('make-runnable');