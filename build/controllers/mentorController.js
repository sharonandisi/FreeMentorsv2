"use strict";

var _userModel = require("../models/userModel");

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

var _messageHelper = _interopRequireDefault(require("../helpers/messageHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchAllMentors(_x, _x2) {
  return _fetchAllMentors.apply(this, arguments);
}

function _fetchAllMentors() {
  _fetchAllMentors = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var mentor, mentors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _userModel.findMentor)();

          case 3:
            mentor = _context.sent;
            mentors = mentor.map(function (_ref) {
              var mentorid = _ref.id,
                  firstname = _ref.firstname,
                  lastname = _ref.lastname,
                  email = _ref.email,
                  address = _ref.address,
                  occupation = _ref.occupation,
                  bio = _ref.bio,
                  expertise = _ref.expertise,
                  mentorstatus = _ref.mentorstatus,
                  isAdmin = _ref.isAdmin;
              return {
                mentorid: mentorid,
                firstname: firstname,
                lastname: lastname,
                email: email,
                address: address,
                occupation: occupation,
                bio: bio,
                expertise: expertise,
                mentorstatus: mentorstatus,
                isAdmin: isAdmin
              };
            });

            if (!mentors.length) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].users.mentors.mentors, mentors));

          case 7:
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 404, _messageHelper["default"].users.mentors.noMentor));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _responseHelper["default"])(res, 500, _messageHelper["default"].users.failed.catchError));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _fetchAllMentors.apply(this, arguments);
}

function fetchSpecificMentor(_x3, _x4) {
  return _fetchSpecificMentor.apply(this, arguments);
}

function _fetchSpecificMentor() {
  _fetchSpecificMentor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user, mentorid, firstname, lastname, email, address, occupation, bio, expertise, mentorstatus, isAdmin;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.mentorid;
            _context2.next = 4;
            return (0, _userModel.findOne)(id);

          case 4:
            user = _context2.sent;

            if (user.mentorstatus) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 404, _messageHelper["default"].users.mentors.noMentor));

          case 7:
            if (!user.mentorstatus) {
              _context2.next = 10;
              break;
            }

            mentorid = user.id, firstname = user.firstname, lastname = user.lastname, email = user.email, address = user.address, occupation = user.occupation, bio = user.bio, expertise = user.expertise, mentorstatus = user.mentorstatus, isAdmin = user.isAdmin;
            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 200, _messageHelper["default"].users.mentors.mentor, {
              mentorid: mentorid,
              firstname: firstname,
              lastname: lastname,
              email: email,
              address: address,
              occupation: occupation,
              bio: bio,
              expertise: expertise,
              mentorstatus: mentorstatus,
              isAdmin: isAdmin
            }));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _responseHelper["default"])(res, 500, _messageHelper["default"].users.failed.catchError));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _fetchSpecificMentor.apply(this, arguments);
}

module.exports = {
  fetchAllMentors: fetchAllMentors,
  fetchSpecificMentor: fetchSpecificMentor
};