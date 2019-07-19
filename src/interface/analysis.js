const Base = require('./base');

/**
 * 数据分析
 */
class Analysis extends Base {
    constructor() {
        super();
        
    }
    /**
     * 获取用户访问小程序月留存
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidmonthlyretaininfo`, option);
    }
    /**
     * 获取用户访问小程序周留存
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidweeklyretaininfo`, option);
    }
    /**
     * 获取用户访问小程序日留存
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/getweanalysisappiddailyretaininfo`, option);
    }

    /**
     * 获取用户访问小程序数据月趋势
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidmonthlyvisittrend`, option);
    }

    /**
     * 获取用户访问小程序数据周趋势
     * @param {*} option 
     * @example getMonthlyRetain({access_token,begin_date,end_date});
     */
    async getMonthlyRetain(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappidweeklyvisittrend`, option);
    }

    /**
     * 获取用户访问小程序数据日趋势
     * @param {*} option 
     * @example getDailyVisitTrend({access_token,begin_date,end_date});
     */
    async getDailyVisitTrend(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/datacube/getweanalysisappiddailyvisittrend`, option);
    }

}

module.exports = new Analysis();