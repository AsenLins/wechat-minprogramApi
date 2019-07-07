const Base=require('./base');

class QR extends Base{
    constructor(){
        super();
    }
    /**
     * 获取小程序二维码
     * @param {*} option 
     */
    async create(option){
        const {accessToken,width,path}=option;
        return await this.proxy.post({
            encoding:null,
            url:`${this.config.domain}/cgi-bin/wxaapp/createwxaqrcode`,
            query:{
                access_token:accessToken
            },
            payload:{
                width,
                path
            }
        });
    }
    /**
     * 获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制
     * @param {*} option 
     */
    async get(option){
        const {accessToken,width,path,auto_color,line_color,is_hyaline}=option;
        return await this.proxy.post({
            encoding:null,
            url:`${this.config.domain}/wxa/getwxacode`,
            query:{
                access_token:accessToken
            },
            payload:{
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
     */
    async getUnlimited(option){
        const {accessToken,scene,page,width,auto_color,line_color,is_hyaline}=option;
        return await this.proxy.post({
            encoding:null,
            url:`${this.config.domain}/wxa/getwxacodeunlimit`,
            query:{
                access_token:accessToken
            },
            payload:{
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

module.exports=new QR;