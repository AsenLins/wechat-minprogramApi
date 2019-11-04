/*
import auth,* as wxAuth from '../lib/interface/auth';
import pay,* as wxPay from '../lib/interface/pay';
import acode,* as wxAcode from '../lib/interface/qr';
import templateMessage,* as wxTemplateMessage from '../lib/interface/templateMessage';
import analysis,* as wxAnalysis  from '../lib/interface/analysis';
import units,* as wxUnits  from '../lib/common/unit';
import config,* as wxConfig  from '../lib/common/config';
*/

/*
export {
    wxAuth,
    wxPay,
    wxAcode,
    wxTemplateMessage,
    wxAnalysis,
    wxUnits,
    wxConfig
};

export default {
    auth,
    pay,
    acode,
    templateMessage,
    analysis,
    units,
    config
};
*/

const auth=require('./interface/auth');
const pay=require('./interface/pay');
const acode=require('./interface/acode');
const templateMessage=require('./interface/templateMessage');
const analysis=require('./interface/analysis');
const units=require('./common/unit');
const config=require('./common/config');
const httpProxy=require('./common/proxy');

module.exports={
    auth,
    pay,
    acode,
    templateMessage,
    analysis,
    units,
    config,
    httpProxy
}

