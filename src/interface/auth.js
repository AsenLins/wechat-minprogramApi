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
     * @param {Boolean} cache 是否使用自带缓存.默认:true
     * @example getAccessToken({grant_type,cache})
     */
    async getAccessToken({grant_type='client_credential',cache=false}={}) {
        const { appid, secret, domain} = this.config;
        let{ accessTokenCache }= this.config;
        if(accessTokenCache===undefined){
            this.config.accessTokenCache={
                access_token:'',
                expires_in:''   
            }
            accessTokenCache=this.config.accessTokenCache;
        }


        if(cache&&accessTokenCache.expires_in!==''){
            const now=new Date();
            const expires_in=new Date(accessTokenCache.accessTokenCache);
            if(now.getTime()<expires_in.getTime()){
                return accessTokenCache
            }
        }

        const result=await this.proxy.get({
            url: `${domain}/cgi-bin/token`,
            payload: {
                appid,
                secret,
                grant_type
            }
        });
        
        const expiresDate=new Date();
        accessTokenCache.expires_in=cache?expiresDate.setHours(2):result.expires_in;
        accessTokenCache.access_token= result.access_token;
        

        return accessTokenCache;
    }

    /**
     * 获取该用户的 UnionId
     * @example getPaidUnionId(option)
     */
    async getPaidUnionId(option) {
        return await this.proxy.get({
            url: `${this.config.domain}/wxa/getpaidunionid`,
            payload: option
        });
    }



}

module.exports = new Auth();

