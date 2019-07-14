const Base = require('./base');

/**
 * OCR
 */
class Ocr extends Base {

    constructor(){
        super();
    }
    /**
     * 小程序的银行卡 OCR 识别
     * @param {*} option 
     * @example bankcard({access_token,type,img_url,img});
     */
    async bankcard(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cv/ocr/bankcard`, option);
    }

    /**
     * 小程序的行驶证 OCR 识别
     * @param {*} option 
     * @example drivingLicense({access_token,type,img_url,img});
     */
    async drivingLicense(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cv/ocr/driving`, option);
    }

    /**
     * 小程序的身份证 OCR 识别
     * @param {*} option 
     * @example idcard({access_token,type,img_url,img});
     */
    async idcard(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cv/ocr/idcard`, option);
    }
}


module.exports=new Ocr();