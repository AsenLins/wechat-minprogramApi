const Base = require('./base');


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
        option=option===undefined?{grant_type:'client_credential'}:option;
        const {grant_type}=option;
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



}

module.exports = new Auth();

