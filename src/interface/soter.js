const Base = require('./base');

/**
 * 生物验证
 */
class Soter extends Base {

    constructor(){
        super();
    }
    /**
     * SOTER 生物认证秘钥签名验证
     * @param {*} option 
     * @example verifySignature({access_token});
     */
    async verifySignature(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/soter/verify_signature`, option);
    }
}


module.exports=new Soter();