"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sessionModel = require("../models/sessionModel");

var _messageHelper = _interopRequireDefault(require("./../helpers/messageHelper"));

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var verifySession =
/*#__PURE__*/
function () {
  function verifySession() {
    _classCallCheck(this, verifySession);
  }

  _createClass(verifySession, [{
    key: "checkIfMentor",

    /**
    * class constructor
    * @param { object } data
    */
    value: function () {
      var _checkIfMentor = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var mentorstatus;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mentorstatus = req.decoded.mentorstatus;

                if (!mentorstatus) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", (0, _responseHelper["default"])(res, 400, _messageHelper["default"].users.mentors.mentorToMentoError));

              case 3:
                return _context.abrupt("return", next());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkIfMentor(_x, _x2, _x3) {
        return _checkIfMentor.apply(this, arguments);
      }

      return checkIfMentor;
    }()
  }, {
    key: "checkifSessionExists",
    value: function () {
      var _checkifSessionExists = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res, next) {
        var body, mentorSessions, menteeEmail;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                body = req.body;
                _context2.next = 3;
                return (0, _sessionModel.findmentorSession)(body.mentorid);

              case 3:
                mentorSessions = _context2.sent;
                menteeEmail = req.decoded.email;
                mentorSessions.forEach(function (session) {
                  if (session.menteeemail === menteeEmail && session.sessionstatus === 'pending') return (0, _responseHelper["default"])(res, 409, _messageHelper["default"].sessions.sessions.pendingSession);
                });
                return _context2.abrupt("return", next());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkifSessionExists(_x4, _x5, _x6) {
        return _checkifSessionExists.apply(this, arguments);
      }

      return checkifSessionExists;
    }()
  }, {
    key: "checkalreadyAccepted",
    value: function () {
      var _checkalreadyAccepted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res, next) {
        var sessionid, session;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sessionid = req.params.sessionid;
                _context3.next = 3;
                return (0, _sessionModel.findOne)(sessionid);

              case 3:
                session = _context3.sent;

                if (!(session.sessionstatus === 'accepted')) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", (0, _responseHelper["default"])(res, 409, _messageHelper["default"].sessions.sessions.acceptConflict));

              case 6:
                return _context3.abrupt("return", next());

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkalreadyAccepted(_x7, _x8, _x9) {
        return _checkalreadyAccepted.apply(this, arguments);
      }

      return checkalreadyAccepted;
    }()
  }, {
    key: "checkalreadyDeclined",
    value: function () {
      var _checkalreadyDeclined = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res, next) {
        var sessionid, session;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sessionid = req.params.sessionid;
                _context4.next = 3;
                return (0, _sessionModel.findOne)(sessionid);

              case 3:
                session = _context4.sent;

                if (!(session.sessionstatus === 'rejected')) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", (0, _responseHelper["default"])(res, 409, _messageHelper["default"].sessions.sessions.rejectConflict));

              case 6:
                return _context4.abrupt("return", next());

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkalreadyDeclined(_x10, _x11, _x12) {
        return _checkalreadyDeclined.apply(this, arguments);
      }

      return checkalreadyDeclined;
    }()
  }]);

  return verifySession;
}();

var _default = new verifySession();

exports["default"] = _default;