"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoutes = _interopRequireDefault(require("./userRoutes"));

var _mentorRoutes = _interopRequireDefault(require("./mentorRoutes"));

var _sessionRoutes = _interopRequireDefault(require("./sessionRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use('/api/v2/auth', _userRoutes["default"]);
router.use('/api/v2/mentors', _mentorRoutes["default"]);
router.use('/api/v2/sessions', _sessionRoutes["default"]);
var _default = router;
exports["default"] = _default;