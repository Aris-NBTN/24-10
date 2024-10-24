"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authRoute = require("./authRoute.js");
var _pagesRoute = require("./pagesRoute.js");
var _fileRoute = require("./fileRoute.js");
var _infoRoute = require("./infoRoute.js");
var _groupPageRoute = require("./groupPageRoute.js");
var _customPageRoute = require("./customPageRoute.js");
var _mailRoute = require("./mailRoute.js");
var _userRoute = require("./userRoute.js");
var _layoutRoute = require("./layoutRoute.js");
var _fileManagerRoute = require("./fileManagerRoute.js");
var _categoryCourserRoute = require("./categoryCourserRoute.js");
var _courseRoute = require("./courseRoute.js");
var _paymentRoute = require("./paymentRoute.js");
var _roleRoute = require("./roleRoute.js");
var _pluginsScriptRoute = require("./pluginsScriptRoute.js");
var _orderRoute = require("./orderRoute.js");
var _pluginsRoute = require("./pluginsRoute.js");
var _keyBankRoute = require("./keyBankRoute.js");
var _dataRoute = require("./dataRoute.js");
var _settingRoute = require("./settingRoute.js");
var _contactRoute = require("./contactRoute.js");
var _notificationRoute = require("./notificationRoute.js");
var _includeRoute = require("./includeRoute.js");
var _provincesRoute = require("./provincesRoute.js");
var _testRoute = require("./testRoute.js");
var router = _express["default"].Router();
router.use('/auth', _authRoute.authRouter);
router.use('/pages', _pagesRoute.pagesRouter);
router.use('/file', _fileRoute.fileRouter);
router.use('/info', _infoRoute.infoRouter);
router.use('/group-page', _groupPageRoute.groupPageRouter);
router.use('/custom-page', _customPageRoute.customPageRouter);
router.use('/email', _mailRoute.mailRouter);
router.use('/user', _userRoute.userRouter);
router.use('/layout', _layoutRoute.layoutRouter);
router.use('/file-manager', _fileManagerRoute.fileManagerRouter);
router.use('/order', _orderRoute.orderRouter);
router.use('/setting', _settingRoute.settingRouter);
router.use('/category-courser', _categoryCourserRoute.categoryCourserRouter);
router.use('/courser', _courseRoute.courserRouter);
router.use('/data', _dataRoute.dataRouter);
router.use('/contact', _contactRoute.contactRouter);
router.use('/notification', _notificationRoute.notificationRouter);
router.use('/test', _testRoute.testRouter);
router.use('/include', _includeRoute.inCludeRouter);
router.use('/provinces', _provincesRoute.provincesRouter);
router.use('/payment', _paymentRoute.paymentRouter);
router.use('/role', _roleRoute.roleRouter);
router.use('/plugins-script', _pluginsScriptRoute.pluginsScriptRouter);
router.use('/plugins', _pluginsRoute.pluginsRouter);
router.use('/key-bank', _keyBankRoute.keyBankRouter);
var _default = router;
exports["default"] = _default;