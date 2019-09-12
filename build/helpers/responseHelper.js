"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(res, status, message, data) {
  res.status(status).json({
    status: status,
    message: message,
    data: data
  });
};

exports["default"] = _default;