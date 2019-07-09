import Base from './base'

class AccessToken extends Base{
    constructor(){
        super();
    }
    /**
     * 获取全局AccessToken
     * 获取小程序全局唯一后台接口调用凭据（access_token）。调调用绝大多数后台接口时都需使用 access_token，开发者需要进行妥善保存。
     * 默认2小时
     * @param {String} grant_type 
     */
    async get(grant_type="client_credential"){
        const {appid,secret,domain}=this.config;
        return await this.proxy.get({
            url:`${domain}/cgi-bin/token`,
            payload:{
                appid,
                secret,
                grant_type
            }
        });
    }
}

module.exports=new AccessToken();
