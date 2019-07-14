const Base = require('./base');

/**
 * 动态消息
 */
class UpdatableMessage extends Base {

    constructor(){
        super();
    }
    /**
     * 创建被分享动态消息的
     * @param {*} option 
     * @example createActivityId({access_token});
     */
    async createActivityId(option) {
        return await this.proxy.get(`${this.config.domain}/cgi-bin/message/wxopen/activityid/create`, option);
    }
    /**
     * 修改被分享的动态消息
     * @param {*} option 
     * @example setUpdatableMsg({access_token,activity_id,target_state,template_info});
     */
    async setUpdatableMsg(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/cgi-bin/message/wxopen/updatablemsg/send`, option);
    }

}


module.exports=new UpdatableMessage();