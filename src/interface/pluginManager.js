const Base = require('./base');

/**
 * 插件管理
 */
class PluginManager extends Base {

    constructor(){
        super();
    }
    /**
     * 向插件开发者发起使用插件的申请
     * @param {*} option 
     * @example applyPlugin({access_token,action,plugin_appid,reason});
     */
    async applyPlugin(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/plugin`, option);
    }
    /**
     * 获取当前所有插件使用方
     * @param {*} option 
     * @example getPluginList({access_token,action});
     */
    async getPluginList(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/devplugin`, option);
    }
    /**
     * 查询已添加的插件
     * @param {*} option 
     * @example getPluginDevApplyList({access_token,action,page,num});
     */
    async getPluginDevApplyList(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/plugin`, option);
    }
    /**
     * 修改插件使用申请的状态
     * @param {*} option 
     * @example setDevPluginApplyStatus({access_token,action,appid,reason});
     */
    async setDevPluginApplyStatus(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/devplugin`, option);
    }
    /**
     * 删除已添加的插件
     * @param {*} option 
     * @example unbindPlugin({access_token,action,plugin_appid});
     */
    async unbindPlugin(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/plugin`, option);
    }
}


module.exports=new PluginManager();