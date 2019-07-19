const Base = require('./base');

/**
 * 统一服务消息
 */
class UniformMessage extends Base {

    constructor(){
        super();
    }
    /**
     * 下发小程序和公众号统一的服务消息
     * @param {*} option 
     * @example send({access_token,touser,weapp_template_msg,mp_template_msg,});
     */
    async send(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/message/wxopen/template/uniform_send`, option);
    }
}


module.exports=new UniformMessage();