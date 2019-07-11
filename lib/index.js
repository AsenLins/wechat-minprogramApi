'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wxConfig = exports.wxUnits = exports.wxAnalysis = exports.wxTemplateMessage = exports.wxAcode = exports.wxPay = exports.wxAuth = undefined;

var _auth = require('../lib/interface/auth');

var wxAuth = _interopRequireWildcard(_auth);

var _pay = require('../lib/interface/pay');

var wxPay = _interopRequireWildcard(_pay);

var _qr = require('../lib/interface/qr');

var wxAcode = _interopRequireWildcard(_qr);

var _templateMessage = require('../lib/interface/templateMessage');

var wxTemplateMessage = _interopRequireWildcard(_templateMessage);

var _analysis = require('../lib/interface/analysis');

var wxAnalysis = _interopRequireWildcard(_analysis);

var _unit = require('../lib/common/unit');

var wxUnits = _interopRequireWildcard(_unit);

var _config = require('../lib/common/config');

var wxConfig = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.wxAuth = wxAuth;
exports.wxPay = wxPay;
exports.wxAcode = wxAcode;
exports.wxTemplateMessage = wxTemplateMessage;
exports.wxAnalysis = wxAnalysis;
exports.wxUnits = wxUnits;
exports.wxConfig = wxConfig;
exports.default = {
    auth: wxAuth.default,
    pay: wxPay.default,
    acode: wxAcode.default,
    templateMessage: wxTemplateMessage.default,
    analysis: wxAnalysis.default,
    units: wxUnits.default,
    config: wxConfig.default
};