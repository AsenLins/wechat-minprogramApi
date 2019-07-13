const Base = require('./base');
const crypto = require('crypto');
const WXBizDataCrypt = require('../tools/WXBizDataCrypt');

/**
 * 登陆/接口调用凭证
 */
class Auth extends Base {
    constructor() {
        super();
    }

    /**
     * 微信服务端登录
     * @param {String} js_code 
     * @param {String} grant_type 默认值:authorization_code
     * @example code2Session({js_code,grant_type})
     */
    async code2Session(option) {
        const {js_code, grant_type = "authorization_code"}=option;
        const { appid, secret } = this.config;
        return await this.proxy.get({
            url: `${this.config.domain}/sns/jscode2session`,
            payload: {
                appid,
                secret,
                js_code,
                grant_type
            }
        });
    }


    /**
     * 获取全局AccessToken
     * 获取小程序全局唯一后台接口调用凭据（access_token）。调调用绝大多数后台接口时都需使用 access_token，开发者需要进行妥善保存。
     * 默认2小时
     * @param {String} grant_type 默认值：client_credential
     * @example getAccessToken({grant_type})
     */
    async getAccessToken(option) {
        const {grant_type = "client_credential"}=option;
        const { appid, secret, domain } = this.config;
        return await this.proxy.get({
            url: `${domain}/cgi-bin/token`,
            payload: {
                appid,
                secret,
                grant_type
            }
        });
    }

    /**
     * 获取该用户的 UnionId
     * @param {String} accessToken 
     * @param {String} openId 
     * @example getPaidUnionId({accessToken,openId})
     */
    async getPaidUnionId(option) {
        const {accessToken, openId}=option;
        return await this.proxy.get({
            url: `${this.config.domain}/wxa/getpaidunionid`,
            payload: {
                accessToken,
                openId
            }
        });
    }

    /**
     * 校验微信小程序用户信息
     * @param {String} session_key 
     * @param {String} rawData 
     * @param {String} signature 
     * @example checkSign({session_key,rawData,signature})
     */
    checkUserSign(option) {
        const { session_key, rawData, signature } = option;
        if (session_key === undefined || rawData === undefined || signature === undefined || rawData === undefined) {
            return false;
        }
        const serverSign = crypto.createHash('sha1').update((rawData + session_key)).digest('hex');
        return signature === serverSign;
    }

    /**
     * 解析微信小程序encryptedData
     * @param {*} encryptedData 微信小程序的userInfo.encryptedData
     * @param {String} sessionKey wx.login登录后的sessionKey
     * @param {String} iv 加密算法的初始向量
     * @example decryptData({encryptedData,sessionKey,iv})
     */
    decryptData(option) {
        const {encryptedData, sessionKey, iv}=option;
        const { appid } = this.config;
        const wxBizDataCrypt = new WXBizDataCrypt(appid, sessionKey);
        return wxBizDataCrypt.decryptData(encryptedData, iv)
    }

}

module.exports = new Auth();

