const Base = require('./base');
const fs = require('fs');
const { xmlToJson, jsonToXml, signToMD5, sortByASCII, getNonceStr } = require('../common/unit');

const sendPost = Symbol('sendPost');

/**
 * 小程序支付
 */
class Pay extends Base {
    constructor() {
        super();
    }

    /**
     * 统一下单
     * @param {*} option 支付参数对象
     */
    async unifiedorder(option) {
        const { appid, mch_id, paydomain } = this.config;

        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
            trade_type: option.nonce_str || "JSAPI"
        })

        return this[sendPost](`${paydomain}/pay/unifiedorder`, payParams);
    }
    /**
     * 查询订单
     * @param {*} option 查询参数对象 
     */
    async orderquery(option) {
        const { appid, mch_id, paydomain } = this.config;
        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
        })

        return this[sendPost](`${paydomain}/pay/orderquery`, payParams);
    }
    /**
     * 关闭订单
     * @param {*} option 关闭参数对象
     */
    async closeorder(option) {
        const { appid, mch_id, paydomain } = this.config;
        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
        })

        return this[sendPost](`${paydomain}/pay/closeorder`, payParams);
    }

    /**
     * 申请退款
     * @param {*} option 退款参数对象
     */
    async refund(option) {
        const { appid, mch_id, refundCAPath, paydomain } = this.config;
        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
        })

        return this[sendPost](
            `${paydomain}/secapi/pay/refund`,
            payParams,
            {
                agentOptions: {
                    pfx: fs.readFileSync(refundCAPath),
                    passphrase: mch_id
                }
            });
    }

    /**
     * 查询退款
     * @param {*} option 退款查询对象
     */
    async refundquery(option) {
        const { appid, mch_id, paydomain } = this.config;
        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
        })

        return this[sendPost](`${paydomain}/pay/refundquery`, payParams);
    }

    /**
     * 下载对账单
     * @param {*} option 下载参数对象
     */
    async downloadbill(option) {
        const { appid, mch_id, paydomain } = this.config;
        const payParams = Object.assign(option, {
            appid,
            mch_id,
            nonce_str: option.nonce_str || getNonceStr(),
        })

        return this[sendPost](`${paydomain}/pay/downloadbill`, payParams);
    }


    /**
     * 内部请求代理对象
     * @param {*} url 请求地址
     * @param {*} params 支付参数
     * @param {*} requestOption request对象参数
     */
    async [sendPost](url, params, requestOption = {}) {
        const { paykey } = this.config;
        const payParams = sortByASCII(params);
        const sign = signToMD5(payParams, paykey);
        payParams.sign = sign;

        const payParamsXml = jsonToXml(payParams).trim();
     
        const payResult = await this.proxy.post(Object.assign({
            url,
            contentType: 'text/xml',
            body: payParamsXml,
            convertJSON:false
        }, requestOption),true);
        //console.log(payParams);
        //console.log('payResult',payResult);
        //console.log('xml=',payParamsXml);
        return xmlToJson(payResult);
    }


}

module.exports = new Pay();