"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var pageSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  order: {
    type: Number
  },
  description: {
    type: String
  },
  keywords: [{
    type: String
  }],
  group: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Group'
  },
  content: {
    html: {
      type: String
    },
    css: {
      type: String
    },
    js: {
      type: String
    }
  },
  edit: {
    type: Object
  }
}, {
  timestamps: true
});
pageSchema.pre('save', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    var count;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!this.isNew) {
            _context.next = 5;
            break;
          }
          _context.next = 3;
          return _mongoose["default"].models.pages.countDocuments();
        case 3:
          count = _context.sent;
          this.order = count + 1;
        case 5:
          next();
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var _default = _mongoose["default"].model('pages', pageSchema);
exports["default"] = _default;