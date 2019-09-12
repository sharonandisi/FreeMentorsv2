"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var env = process.env.NODE_ENV;
var authHelper = {
  /**
     * Hash Password Method
     * @param {string} password
     * @return {string} return hashed password
     */
  hashPassword: function hashPassword(password) {
    return _bcrypt["default"].hashSync(password, _bcrypt["default"].genSaltSync(8));
  },

  /**
     * compare Password
     * @param {string} hashPassword
     * @param {string} password
     * @returns {Boolean}
     */
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcrypt["default"].compareSync(password, hashPassword);
  },

  /**
     * isValidEmail helper method
     * @param {string} email
     * @returns {Boolean} True or false
     */
  isValidEmail: function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
      * Generate Token
      * @param {string} is
      * @returns {string} token
      */
  generateToken: function generateToken(payload) {
    var token = _jsonwebtoken["default"].sign(payload, process.env.SECRET);

    return token;
  }
};
var _default = authHelper;
exports["default"] = _default;