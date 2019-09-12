"use strict";

var _sessionModel = require("../models/sessionModel");

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

var _messageHelper = _interopRequireDefault(require("../helpers/messageHelper"));

var _userModel = require("../models/userModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createSession(_x, _x2) {
  return _createSession.apply(this, arguments);
}

function _createSession() {
  _createSession = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var menteeid, body, mentee, menteeEmail, session;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            menteeid = req.decoded.id;
            body = req.body;
            console.log(body);
            _context.prev = 3;
            _context.next = 6;
            return (0, _userModel.findOne)(menteeid);

          case 6:
            mentee = _context.sent;
            console.log(mentee);
            menteeEmail = mentee.email;
            _context.next = 11;
            return (0, _sessionModel.sessionCreate)(body, menteeEmail);

          case 11:
            session = _context.sent;
            console.log(session);
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 201, _messageHelper["default"].sessions.sessions.session, session));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 500, _messageHelper["default"].users.failed.catchError));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));
  return _createSession.apply(this, arguments);
}

function acceptRequest(_x3, _x4) {
  return _acceptRequest.apply(this, arguments);
}

function _acceptRequest() {
  _acceptRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var sessionid, session;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sessionid = req.params.sessionid;
            _context2.next = 3;
            return (0, _sessionModel.accept)(sessionid);

          case 3:
            session = _context2.sent;
            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].sessions.sessions.accept, session));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _acceptRequest.apply(this, arguments);
}

function declineRequest(_x5, _x6) {
  return _declineRequest.apply(this, arguments);
}

function _declineRequest() {
  _declineRequest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var sessionid, session;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sessionid = req.params.sessionid;
            _context3.next = 3;
            return (0, _sessionModel.decline)(sessionid);

          case 3:
            session = _context3.sent;
            return _context3.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].sessions.sessions.decline, session));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _declineRequest.apply(this, arguments);
}

module.exports = {
  createSession: createSession,
  acceptRequest: acceptRequest,
  declineRequest: declineRequest
};