'use strict';

const Base = require('./base');

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
        const { accessToken, width, path } = option;
        return await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/cgi-bin/wxaapp/createwxaqrcode`,
            qs: {
                access_token: accessToken
            },
            body: {
                width,
                path
            }
        });
    }
    /**
     * 获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制
     * @param {*} option 
     * @example get({accessToken, width, path, auto_color, line_color, is_hyaline})
     */
    async get(option) {
        const { accessToken, width, path, auto_color, line_color, is_hyaline } = option;
        return await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/wxa/getwxacode`,
            qs: {
                access_token: accessToken
            },
            body: {
                width,
                path,
                auto_color,
                line_color,
                is_hyaline
            }
        });
    }

    /**
     * 获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
     * @param {*} option 
     * @example getUnlimited({scene, page, width, auto_color, line_color, is_hyaline})
     */
    async getUnlimited(option) {
        const { accessToken, scene, page, width, auto_color, line_color, is_hyaline } = option;
        return await this.proxy.post({
            encoding: null,
            url: `${this.config.domain}/wxa/getwxacodeunlimit`,
            qs: {
                access_token: accessToken
            },
            body: {
                scene,
                page,
                width,
                auto_color,
                line_color,
                is_hyaline
            }
        });
    }
}

module.exports = new QR();