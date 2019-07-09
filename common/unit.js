import crypto from 'crypto';
import parse from 'fast-xml-parser';
import cryptoRandomString from 'crypto-random-string';

const JsonToXmlParser=parse.j2xParser;
const XmlToJsonParser=parse;

/**
 * 生成32位随机字符串
 */
export function getNonceStr(){
    return cryptoRandomString({length:32});
}

/**
 * json转xml
 * @param {*} jsonObj  需要转换的json对象
 */
export function jsonToXml(jsonObj) {
    const J2XMLParser = new JsonToXmlParser();
    return `<xml>${J2XMLParser.parse(jsonObj)}</xml>`;
}

/**
 * xml转json
 * @param {*} xmlObj 需要转换的xml对象
 */
export function xmlToJson(xmlObj) {
    var tObj = XmlToJsonParser.getTraversalObj(xmlObj);
    return XmlToJsonParser.convertToJson(tObj);
}
/**
 * 根据ASCII排序指定对象
 * @param {*} param 排序的对象
 */
export function sortByASCII(param) {
    const keys = Object.keys(param).sort();
    const sortObj = {};
    keys.forEach(key => {
        sortObj[key] = param[key];
    });
    return sortObj;
}
/**
 * 生成微信支付签名（MD5格式）
 * @param {*} params 签名对象
 * @param {*} payKey 商户密钥
 * @example {appid:ap42szdwes,mch_id:1455221,nonce_str:6e8a39a2816ff83109f2435bf5e645e0}
 */
export function signToMD5(params,payKey) {
    const tempParams = JSON.parse(JSON.stringify(sortByASCII(params)));

    if (tempParams.sign) {
        delete tempParams.sign;
    }

    let tempStr = "";
    const paramKeys = Object.keys(tempParams);
    paramKeys.forEach(key => {
        tempStr = `${tempStr}&${key}=${params[key]}`
    });
    tempStr = tempStr.substring(1) + "&key=" + payKey;

    const md5 = crypto.createHash("md5");
    md5.update(tempStr);
    const md5Sign = md5.digest('hex').toUpperCase();

    return md5Sign;

}
