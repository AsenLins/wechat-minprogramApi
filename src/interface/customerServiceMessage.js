const Base = require('./base');


/**
 * 客服消息
 */
class CustomerServiceMessage extends Base {

    constructor(){
        super();
    }
    /**
     * 下发客服当前输入状态给用户
     * @param {*} option 
     * @example setTyping({access_token,touser,command});
     */
    async setTyping(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/message/custom/typing`, option);
    }
    /**
     * 把媒体文件上传到微信服务器。目前仅支持图片。用于发送客服消息或被动回复用户消息
     * @param {*} option 
     * @example uploadTempMedia({access_token,type,media});
     */
    async uploadTempMedia(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/media/upload`, option);
    }
    /**
     * 获取客服消息内的临时素材。即下载临时的多媒体文件。目前小程序仅支持下载图片文件。
     * @param {*} option 
     * @example getTempMedia({access_token,media_id});
     */
    async getTempMedia(option) {
        return await this.proxy.get(`${this.config.domain}/cgi-bin/media/get`, option);
    }

    /**
     * 发送客服消息给用户。
     * @param {*} option 
     * @example send({access_token,touser,msgtype,content,image,link,miniprogrampage});
     */
    async send(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/message/custom/send`, option);
    }

}


module.exports=new CustomerServiceMessage();
