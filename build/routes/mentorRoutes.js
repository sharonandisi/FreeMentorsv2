"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mentorController = require("../controllers/mentorController");

var _userVerification = require("../middleware/userVerification");

var _paramsIntVerification = _interopRequireDefault(require("../middleware/paramsIntVerification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/:mentorid', _userVerification.verifyauthenUser, _paramsIntVerification["default"], _mentorController.fetchSpecificMentor);
router.get('/', _userVerification.verifyauthenUser, _mentorController.fetchAllMentors);
var _default = router;
exports["default"] = _default;