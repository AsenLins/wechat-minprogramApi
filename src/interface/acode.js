const Base = require('./base');

/**
 * 小程序码
 */
class QR extends Base {
    constructor() {
        super();
    }
    /**
     * 获取小程序二维码
     * @param {*} option 
     * * @example createQRCode({accessToken, width, path})
     */
    async createQRCode(option) {
        const { access_token, width, path } = option;
        const result=await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/cgi-bin/wxaapp/createwxaqrcode`,
            qs: {
                access_token
            },
            body: {
                width,
                path
            }
        },true); 
        if(result.toString().indexOf('errcode')>-1){
            return result.toString();
        }
        else{
            return result;
        }
    }
    /**
     * 获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制
     * @param {*} option 
     * @example get({accessToken, width, path, auto_color, line_color, is_hyaline})
     */
    async get(option) {
        const { access_token, width, path, auto_color, line_color, is_hyaline } = option;
        const result=await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/wxa/getwxacode`,
            qs: {
                access_token
            },
            body: {
                width,
                path,
                auto_color,
                line_color,
                is_hyaline
            }
        },true);
        if(result.toString().indexOf('errcode')>-1){
            return result.toString();
        }
        else{
            return result;
        }

    }

    /**
     * 获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
     * @param {*} option 
     * @example getUnlimited({scene, page, width, auto_color, line_color, is_hyaline})
     */
    async getUnlimited(option) {
        const { access_token, scene, page, width, auto_color, line_color, is_hyaline } = option;
        return await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/wxa/getwxacodeunlimit`,
            qs: {
                access_token
            },
            body: {
                scene,
                page,
                width,
                auto_color,
                line_color,
                is_hyaline
            }
        },true);
    }
}

module.exports = new QR;