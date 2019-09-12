"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sessionController = require("../controllers/sessionController");

var _userVerification = require("../middleware/userVerification");

var _sessionMiddleware = _interopRequireDefault(require("../middleware/sessionMiddleware"));

var _paramsIntVerification = _interopRequireDefault(require("./../middleware/paramsIntVerification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/', _userVerification.verifyauthenUser, _sessionMiddleware["default"].checkIfMentor, _sessionMiddleware["default"].checkifSessionExists, _userVerification.checkmentorStatus, _sessionController.createSession);
router.patch('/:sessionid/reject', _userVerification.verifyauthenUser, _paramsIntVerification["default"], _userVerification.verifyMentor, _sessionMiddleware["default"].checkalreadyDeclined, _sessionController.declineRequest);
router.patch('/:sessionid/accept', _userVerification.verifyauthenUser, _paramsIntVerification["default"], _userVerification.verifyMentor, _sessionMiddleware["default"].checkalreadyAccepted, _sessionController.acceptRequest);
var _default = router;
exports["default"] = _default;