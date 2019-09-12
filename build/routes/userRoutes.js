"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _userValidation = _interopRequireDefault(require("../middleware/userValidation"));

var _userVerification = require("../middleware/userVerification");

var _admin = require("../middleware/admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/signup', _userValidation["default"].validateSignup, _userController.Create);
router.post('/signin', _userValidation["default"].validateLogin, _userVerification.verifyRegistereduser, _userVerification.verifyPassword, _admin.CreateAdmin, _userController.login);
router.patch('/:id', _userVerification.verifyauthenUser, _userVerification.verifyAdmin, _userVerification.checkIfMentor, _userController.ChangeMentor);
var _default = router;
exports["default"] = _default;