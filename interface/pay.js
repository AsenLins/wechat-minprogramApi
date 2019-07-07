const Base=require('./base');
const cryptoRandomString = require('crypto-random-string');

class Pay extends Base {
    constructor(){
        super();
    }
    unifiedorder(option){
        const {appid,mch_id}=this.config;
        const nonce_str=option.nonce_str||cryptoRandomString({length:32});
        //const sign_type=option.sign_type||'MD5';
        //const fee_type=option.fee_type||'MD5';
        const trade_type=option.trade_type||'JSAPI';
        const openid='';
        //sign
        const baseParam={
            appid,
            body,
            mch_id,
            nonce_str,
            out_trade_no,
            total_fee,
            spbill_create_ip,
            notify_url,
            trade_type,
            openid:option.id
        }

        const {
            device_info,
            sign_type,
            detail,
            attach,
            fee_type,
            time_start,
            time_expire,
            goods_tag,
            product_id,
            limit_pay,
            receipt,
            scene_info,      
        }=option;


        //pay/unifiedorder
    }
    
}