"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Responses =
/*#__PURE__*/
function () {
  function Responses() {
    _classCallCheck(this, Responses);
  }

  _createClass(Responses, null, [{
    key: "validationsError",
    value: function validationsError(statusCode, data, res) {
      res.status(statusCode).json({
        status: statusCode,
        error: data
      });
    }
  }, {
    key: "Postsuccess",
    value: function Postsuccess(statusCode, data, res) {
      res.status(statusCode).json({
        status: statusCode,
        message: "success"
      });
    }
  }, {
    key: "catchErrors",
    value: function catchErrors(statusCode, data, res) {
      res.status(statusCode).json({
        status: statusCode,
        error: data
      });
    }
  }]);

  return Responses;
}();

var _default = Responses;
exports["default"] = _default;