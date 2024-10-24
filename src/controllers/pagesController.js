"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagesController = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _pagesModel = _interopRequireDefault(require("../models/pagesModel.js"));
var _masonryModel = _interopRequireDefault(require("../models/masonryModel"));
var _indexControllder = require("./indexControllder");
var _httpStatusCodes = require("http-status-codes");
var _excluded = ["page", "limit"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var nameMess = 'Bài viết';
var sigPage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var slug, results;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          slug = req.params.slug;
          _context.next = 4;
          return (0, _indexControllder.getSigData)(nameMess, {
            slug: slug
          }, _pagesModel["default"], {
            select: '_id name title description title keywords content'
          });
        case 4:
          results = _context.sent;
          res.status(results.status).json(results.message);
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function sigPage(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var sigPageEdit = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var slug, results;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          slug = req.params.slug;
          _context2.next = 4;
          return (0, _indexControllder.getSigData)(nameMess, {
            slug: slug
          }, _pagesModel["default"], {
            select: '_id name slug edit'
          });
        case 4:
          results = _context2.sent;
          res.status(results.status).json(results.message);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function sigPageEdit(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var allPage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$query, _req$query$page, page, _req$query$limit, limit, skip, totalItems, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit;
          skip = (page - 1) * limit;
          _context3.next = 5;
          return _pagesModel["default"].countDocuments();
        case 5:
          totalItems = _context3.sent;
          _context3.next = 8;
          return _pagesModel["default"].find({}).sort({
            order: -1
          }).skip(skip).limit(Number(limit)).select('-content -edit');
        case 8:
          data = _context3.sent;
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: Number(page),
            newData: data
          });
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function allPage(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var searchPage = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$query2, _req$query2$page, page, _req$query2$limit, limit, filters, searchCondition, skip, totalItems, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$query2 = req.query, _req$query2$page = _req$query2.page, page = _req$query2$page === void 0 ? 1 : _req$query2$page, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === void 0 ? 50 : _req$query2$limit, filters = (0, _objectWithoutProperties2["default"])(_req$query2, _excluded);
          searchCondition = {};
          Object.keys(filters).forEach(function (key) {
            if (key !== 'page' && key !== 'limit') {
              searchCondition[key] = {
                $regex: filters[key],
                $options: 'i'
              };
            }
          });
          if (!(Object.keys(searchCondition).length === 0)) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({
            message: 'Vui lòng cung cấp điều kiện tìm kiếm.'
          }));
        case 6:
          skip = (page - 1) * limit;
          _context4.next = 9;
          return _pagesModel["default"].countDocuments(searchCondition);
        case 9:
          totalItems = _context4.sent;
          _context4.next = 12;
          return _pagesModel["default"].find(searchCondition).sort({
            order: -1
          }).skip(skip).limit(Number(limit)).select('-content -edit');
        case 12:
          data = _context4.sent;
          res.status(_httpStatusCodes.StatusCodes.OK).json({
            totalItems: totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: Number(page),
            newData: data
          });
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function searchPage(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var addPage = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _indexControllder.addData)(nameMess, _pagesModel["default"], req.body, {
            uniqueField: 'name',
            customSlugField: 'name'
          });
        case 3:
          result = _context5.sent;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function addPage(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var putPage = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return (0, _indexControllder.updateData)(nameMess, _pagesModel["default"], id, req.body, {
            uniqueField: 'name'
          });
        case 4:
          result = _context6.sent;
          res.status(result.status).json({
            message: result.message,
            newData: result.data
          });
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function putPage(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var putOrder = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var pagesOrder, updatedPages, _iterator, _step, page, updatedPage;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          pagesOrder = req.body;
          updatedPages = [];
          _iterator = _createForOfIteratorHelper(pagesOrder);
          _context7.prev = 4;
          _iterator.s();
        case 6:
          if ((_step = _iterator.n()).done) {
            _context7.next = 14;
            break;
          }
          page = _step.value;
          _context7.next = 10;
          return _pagesModel["default"].findByIdAndUpdate(page._id, {
            order: page.order
          }, {
            "new": true
          }).select('-content -edit');
        case 10:
          updatedPage = _context7.sent;
          updatedPages.push(updatedPage);
        case 12:
          _context7.next = 6;
          break;
        case 14:
          _context7.next = 19;
          break;
        case 16:
          _context7.prev = 16;
          _context7.t0 = _context7["catch"](4);
          _iterator.e(_context7.t0);
        case 19:
          _context7.prev = 19;
          _iterator.f();
          return _context7.finish(19);
        case 22:
          res.status(200).json({
            message: 'Order fields updated successfully',
            newData: updatedPages
          });
          _context7.next = 28;
          break;
        case 25:
          _context7.prev = 25;
          _context7.t1 = _context7["catch"](0);
          next(_context7.t1);
        case 28:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 25], [4, 16, 19, 22]]);
  }));
  return function putOrder(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
var copyPage = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var id, originalPage, newPageData, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          id = req.params.id;
          _context8.next = 4;
          return _pagesModel["default"].findById(id);
        case 4:
          originalPage = _context8.sent;
          if (originalPage) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: 'Trang không tồn tại.'
          }));
        case 7:
          newPageData = _objectSpread(_objectSpread({}, originalPage.toObject()), {}, {
            name: "".concat(originalPage.name, " - Copy"),
            slug: "".concat(originalPage.slug, "-copy")
          });
          delete newPageData._id;
          _context8.next = 11;
          return (0, _indexControllder.addData)(nameMess, _pagesModel["default"], newPageData, {
            uniqueField: 'name',
            customSlugField: 'name'
          });
        case 11:
          result = _context8.sent;
          res.status(result.status).json({
            message: 'Trang đã được sao chép thành công.',
            newData: result.data
          });
          _context8.next = 18;
          break;
        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 15]]);
  }));
  return function copyPage(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();
var delPage = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var id, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          id = req.params.id;
          _context9.next = 4;
          return (0, _indexControllder.deleteData)(nameMess, _pagesModel["default"], id);
        case 4:
          result = _context9.sent;
          res.status(result.status).json({
            message: result.message,
            _id: id
          });
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function delPage(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
var replaceInObject = function replaceInObject(obj, oldBaseUrl, newBaseUrl) {
  if (typeof obj === 'string') {
    return obj.replace(new RegExp(oldBaseUrl, 'gi'), newBaseUrl);
  } else if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return replaceInObject(item, oldBaseUrl, newBaseUrl);
    });
  } else if ((0, _typeof2["default"])(obj) === 'object') {
    var updatedObject = {};
    for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      updatedObject[key] = replaceInObject(value, oldBaseUrl, newBaseUrl);
    }
    return updatedObject;
  }
  return obj;
};
var changeText = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var _req$body, oldDomain, newDomain, updatePageResult, pages, updatedPagesCount, _iterator2, _step2, page, editString, updatedEditString, updateMasonryResult, totalUpdated;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$body = req.body, oldDomain = _req$body.oldDomain, newDomain = _req$body.newDomain;
          if (!(!oldDomain || !newDomain)) {
            _context10.next = 3;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            error: 'Vui lòng cung cấp cả oldDomain và newDomain'
          }));
        case 3:
          _context10.prev = 3;
          _context10.next = 6;
          return _pagesModel["default"].updateMany({
            $or: [{
              'content.html': {
                $regex: oldDomain,
                $options: 'i'
              }
            }, {
              'content.css': {
                $regex: oldDomain,
                $options: 'i'
              }
            }, {
              'content.js': {
                $regex: oldDomain,
                $options: 'i'
              }
            }]
          }, [{
            $set: {
              'content.html': {
                $replaceAll: {
                  input: '$content.html',
                  find: oldDomain,
                  replacement: newDomain
                }
              },
              'content.css': {
                $replaceAll: {
                  input: '$content.css',
                  find: oldDomain,
                  replacement: newDomain
                }
              },
              'content.js': {
                $replaceAll: {
                  input: '$content.js',
                  find: oldDomain,
                  replacement: newDomain
                }
              }
            }
          }]);
        case 6:
          updatePageResult = _context10.sent;
          _context10.next = 9;
          return _pagesModel["default"].find({
            'edit': {
              $type: 'object'
            }
          });
        case 9:
          pages = _context10.sent;
          updatedPagesCount = 0;
          _iterator2 = _createForOfIteratorHelper(pages);
          _context10.prev = 12;
          _iterator2.s();
        case 14:
          if ((_step2 = _iterator2.n()).done) {
            _context10.next = 26;
            break;
          }
          page = _step2.value;
          if (!page.edit) {
            _context10.next = 24;
            break;
          }
          editString = JSON.stringify(page.edit);
          if (!editString.includes(oldDomain)) {
            _context10.next = 24;
            break;
          }
          updatedEditString = editString.replace(new RegExp(oldDomain, 'g'), newDomain);
          page.edit = JSON.parse(updatedEditString);
          _context10.next = 23;
          return page.save();
        case 23:
          updatedPagesCount++;
        case 24:
          _context10.next = 14;
          break;
        case 26:
          _context10.next = 31;
          break;
        case 28:
          _context10.prev = 28;
          _context10.t0 = _context10["catch"](12);
          _iterator2.e(_context10.t0);
        case 31:
          _context10.prev = 31;
          _iterator2.f();
          return _context10.finish(31);
        case 34:
          _context10.next = 36;
          return _masonryModel["default"].updateMany({
            'img.imgSrc': {
              $regex: oldDomain,
              $options: 'i'
            }
          }, [{
            $set: {
              'img': {
                $map: {
                  input: '$img',
                  as: 'image',
                  "in": {
                    $mergeObjects: ['$$image', {
                      imgSrc: {
                        $replaceAll: {
                          input: '$$image.imgSrc',
                          find: oldDomain,
                          replacement: newDomain
                        }
                      },
                      link: {
                        $replaceAll: {
                          input: '$$image.link',
                          find: oldDomain,
                          replacement: newDomain
                        }
                      }
                    }]
                  }
                }
              }
            }
          }]);
        case 36:
          updateMasonryResult = _context10.sent;
          totalUpdated = updatePageResult.modifiedCount + updatedPagesCount + updateMasonryResult.modifiedCount;
          res.json({
            message: 'Cập nhật thành công'
          });
          _context10.next = 44;
          break;
        case 41:
          _context10.prev = 41;
          _context10.t1 = _context10["catch"](3);
          next(_context10.t1);
        case 44:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[3, 41], [12, 28, 31, 34]]);
  }));
  return function changeText(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();
var pagesController = {
  putOrder: putOrder,
  sigPageEdit: sigPageEdit,
  sigPage: sigPage,
  addPage: addPage,
  allPage: allPage,
  putPage: putPage,
  delPage: delPage,
  copyPage: copyPage,
  changeText: changeText,
  searchPage: searchPage
};
exports.pagesController = pagesController;