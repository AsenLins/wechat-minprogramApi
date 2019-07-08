const Base=require('./base');
const crypto=require('crypto');
const JsonToXmlParser = require("fast-xml-parser").j2xParser;
var XmlToJsonParser = require('fast-xml-parser');
const cryptoRandomString = require('crypto-random-string');
const sendPost = Symbol('sendPost');

const helper={
    getParams(params,obj){
        const newParams={};
        params.forEach(item=>{
            if(obj[item]!==undefined||item==='sign'){
                newParams[item]=obj[item];
            }
        });
        return newParams;
    },
    sort(){

    },
    signToMD5(obj){

    }
}

class Pay extends Base {
    constructor(){
        super();
        this.params=[
            'appid',
            'mch_id',
            'device_info',
            'nonce_str',
            'sign',
            'sign_type',
            'body',
            'detail',
            'attach',
            'transaction_id',
            'out_trade_no',
            'fee_type',
            'total_fee',
            'spbill_create_ip',
            'time_start',
            'time_expire',
            'goods_tag',
            'notify_url',
            'trade_type',
            'product_id',
            'limit_pay',
            'openid',
            'receipt',
            'scene_info'
        ].sort();        
    }
    async unifiedorder(option){
        const {appid,mch_id}=this.config;
 
        const payParams=Object.assign(option,{
            appid,
            mch_id,
            nonce_str:option.nonce_str||cryptoRandomString({length:32}),
            trade_type:option.nonce_str||"JSAPI"
        })

        return this[sendPost](`${this.config.paydomain}/pay/unifiedorder`,payParams);
    }
    async orderquery(option){
        const {appid,mch_id}=this.config;
        const payParams=Object.assign(option,{
            appid,
            mch_id,
            nonce_str:option.nonce_str||cryptoRandomString({length:32}),
        })

        return this[sendPost](`${this.config.paydomain}/pay/orderquery`,payParams);
    }

    async closeorder(option){
        const {appid,mch_id}=this.config;
        const payParams=Object.assign(option,{
            appid,
            mch_id,
            nonce_str:option.nonce_str||cryptoRandomString({length:32}),
        })

        return this[sendPost](`${this.config.paydomain}/pay/closeorder`,payParams);      
    }
    
    jsonToXml(jsonObj){
        const J2XMLParser = new JsonToXmlParser();
        return `<xml>${J2XMLParser.parse(jsonObj)}</xml>`;
    }
    xmlToJson(xmlObj){
        var tObj = XmlToJsonParser.getTraversalObj(xmlObj);
        return XmlToJsonParser.convertToJson(tObj);
    }
    sortByASCII(param){
        return helper.getParams(this.params,param);
    }
    signToMD5(params){
        const tempParams=JSON.parse(JSON.stringify(helper.getParams(this.params,params)));
        
        if(tempParams.sign){
            delete tempParams.sign;
        }
        
        let tempStr="";
        const paramKeys=Object.keys(tempParams);
        paramKeys.forEach(key=>{
            tempStr=`${tempStr}&${key}=${params[key]}`
        });
        tempStr=tempStr.substring(1)+"&key="+this.config.paykey;

        const md5=crypto.createHash("md5");
              md5.update(tempStr);
        const md5Sign=md5.digest('hex').toUpperCase();

        //console.log('nosign',tempStr);
        //console.log('sign',md5Sign);
       
        return md5Sign;

    }
    async [sendPost](url,params){
        const payParams=this.sortByASCII(params);
        const sign=this.signToMD5(payParams);
        payParams.sign=sign;

        const payParamsXml = this.jsonToXml(payParams);

        const payResult=await this.proxy.post({
            url,
            contentType:'application/xml',
            payload:payParamsXml
        });
        console.log('xml=',payParamsXml);
        return this.xmlToJson(payResult);
    }

    
}

module.exports=new Pay();