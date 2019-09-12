"use strict";

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var env = process.env.NODE_ENV;
var databaseUrl = env === 'test' ? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;
var pool = new _pg.Pool({
  connectionString: databaseUrl
});

function query(_x) {
  return _query.apply(this, arguments);
}

function _query() {
  _query = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(queryText) {
    var values,
        client,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            values = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.next = 3;
            return pool.connect();

          case 3:
            client = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return client.query('BEGIN');

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return client.query(queryText, values);

          case 10:
            response = _context.sent;
            _context.next = 13;
            return client.query('COMMIT');

          case 13:
            _context.next = 20;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](7);
            _context.next = 19;
            return client.query('ROLLBACK');

          case 19:
            throw _context.t0;

          case 20:
            _context.prev = 20;
            client.release();
            return _context.finish(20);

          case 23:
            return _context.abrupt("return", response);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4,, 20, 23], [7, 15]]);
  }));
  return _query.apply(this, arguments);
}

module.exports = query;