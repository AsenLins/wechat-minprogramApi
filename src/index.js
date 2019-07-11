import auth,* as wxAuth from '../lib/interface/auth';
import pay,* as wxPay from '../lib/interface/pay';
import acode,* as wxAcode from '../lib/interface/qr';
import templateMessage,* as wxTemplateMessage from '../lib/interface/templateMessage';
import analysis,* as wxAnalysis  from '../lib/interface/analysis';
import units,* as wxUnits  from '../lib/common/unit';
import config,* as wxConfig  from '../lib/common/config';


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

