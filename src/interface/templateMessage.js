const Base = require('./base');

/**
 * 模版消息
 */
class TemplateMessage extends Base {
    constructor(){
        super();
    }
    /**
     * 组合模板并添加至帐号下的个人模板库
     * @param {*} option 
     * @example addTemplate({access_token,id,keyword_id_list});
     */
    async addTemplate(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/wxopen/template/add`, option);
    }

    /**
     * 删除帐号下的某个模板
     * @param {*} option 
     * @example deleteTemplate({access_token,template_id});
     */
    async deleteTemplate(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/wxopen/template/del`, option);
    }

    /**
     * 获取模板库某个模板标题下关键词库
     * @param {*} option 
     * @example getTemplateLibraryById({access_token,id});
     */
    async getTemplateLibraryById(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/wxopen/template/del`, option);
    }

    /**
     * 获取小程序模板库标题列表
     * @param {*} option 
     * @example getTemplateLibraryList({access_token,offset,count});
     */
    async getTemplateLibraryList(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/wxopen/template/library/list`, option);
    }

    /**
     * 获取帐号下已存在的模板列表
     * @param {*} option 
     * @example getTemplateList({access_token,offset,count});
     */
    async getTemplateList(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/wxopen/template/list`, option);
    }

    /**
     * 发送模板消息
     * @param {*} option 
     * @example send({access_token,touser,template_id,page,form_id,data,emphasis_keyword});
     */
    async send(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/message/wxopen/template/send`, option);
    }


}

module.exports=new TemplateMessage();



