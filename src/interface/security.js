const Base = require('./base');

/**
 * 内容安全
 */
class Security extends Base {

    constructor(){
        super();
    }
    /**
     * 校验一张图片是否含有违法违规内容
     * @param {*} option 
     * @example imgSecCheck({access_token,media});
     */
    async imgSecCheck(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/img_sec_check`, option);
    }
    /**
     * 异步校验图片/音频是否含有违法违规内容
     * @param {*} option 
     * @example mediaCheckAsync({access_token,media_url,media_type});
     */
    async mediaCheckAsync(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/media_check_async`, option);
    }

    /**
     * 检查一段文本是否含有违法违规内容
     * @param {*} option 
     * @example msgSecCheck({access_token,content});
     */
    async msgSecCheck(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/msg_sec_check`, option);
    }

}


module.exports=new Security();