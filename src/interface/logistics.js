const Base = require('./base');

/**
 * 物流助手
 */
class Logistics extends Base {

    constructor(){
        super();
    }
    /**
     * 绑定、解绑物流账号
     * @param {*} option 
     * @example bindAccount({access_token,type,biz_id,delivery_id,password，remark_content});
     */
    async bindAccount(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/account/bind`, option);
    }
    /**
     * 获取所有绑定的物流账号
     * @param {*} option 
     * @example getallAccount({access_token});
     */
    async getallAccount(option) {
        return await this.proxy.get(`${this.config.domain}/cgi-bin/express/business/account/getall`, option);
    }
    /**
     * 获取电子面单余额。仅在使用加盟类快递公司时，才可以调用
     * @param {*} option 
     * @example getQuota({access_token,delivery_id,biz_id});
     */
    async getQuota(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/quota/get`, option);
    }
    /**
     * 生成运单
     * @param {*} option 
     * @example addOrder({access_token,add_source,wx_appid,expect_time,...});
     */
    async addOrder(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/order/add`, option);
    }
    /**
     * 取消运单
     * @param {*} option 
     * @example cancelOrder({access_token,order_id,openid,delivery_id,waybill_id});
     */
    async cancelOrder(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/order/cancel`, option);
    }

    /**
     * 获取支持的快递公司列表
     * @param {*} option 
     * @example getAllDelivery({access_token});
     */
    async getAllDelivery(option) {
        return await this.proxy.get(`${this.config.domain}/cgi-bin/express/business/delivery/getall`, option);
    }

    /**
     * 获取运单数据
     * @param {*} option 
     * @example getOrder({access_token,order_id,openid,delivery_id,waybill_id});
     */
    async getOrder(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/order/get`, option);
    }
    /**
     * 查询运单轨迹
     * @param {*} option 
     * @example getPath({access_token,order_id,openid,delivery_id,waybill_id});
     */
    async getPath(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/path/get`, option);
    }
    /**
     * 获取打印员。若需要使用微信打单 PC 软件，才需要调用
     * @param {*} option 
     * @example getPrinter({access_token});
     */
    async getPrinter(option) {
        return await this.proxy.get(`${this.config.domain}/cgi-bin/express/business/printer/getall`, option);
    }
    /**
     * 更新打印员。若需要使用微信打单 PC 软件，才需要调用。
     * @param {*} option 
     * @example updatePrinter({access_token,openid,update_type});
     */
    async updatePrinter(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/business/printer/update`, option);
    }

    /**
     * 获取面单联系人信息
     * @param {*} option 
     * @example getContact({access_token,token,waybill_id});
     */
    async getContact(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/delivery/contact/get`, option);
    }

    /**
     * 预览面单模板。用于调试面单模板使用。
     * @param {*} option 
     * @example previewTemplate({access_token,waybill_id,waybill_template,waybill_data,custom});
     */
    async previewTemplate(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/delivery/template/preview`, option);
    }
    /**
     * 更新商户审核结果
     * @param {*} option 
     * @example updateBusiness({access_token,shop_app_id,biz_id,result_code,result_msg});
     */
    async updateBusiness(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/delivery/service/business/update`, option);
    }
    /**
     * 更新运单轨迹
     * @param {*} option 
     * @example updateBusiness({access_token,token,waybill_id,action_time,action_type,action_msg});
     */

    async updateBusiness(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/express/delivery/path/update`, option);
    }

}


module.exports=new Logistics();