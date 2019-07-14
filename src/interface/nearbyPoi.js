const Base = require('./base');

/**
 * 附近的小程序
 */
class NearbyPoi extends Base {

    constructor(){
        super();
    }
    /**
     * 添加地点
     * @param {*} option 
     * @example add({access_token,is_comm_nearby,pic_list,service_infos,...});
     */
    async add(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/addnearbypoi`, option);
    }

    /**
     * 删除地点
     * @param {*} option 
     * @example delete({access_token,poi_id});
     */
    async delete(option) {
        return await this.proxy.sendPostWithAccessToken(`${this.config.domain}/wxa/delnearbypoi`, option);
    }    

    /**
     * 查看地点列表
     * @param {*} option 
     * @example getList({access_token,page,page_rows});
     */
    async getList(option) {
        return await this.proxy.get(`${this.config.domain}/wxa/getnearbypoilist`, option);
    }  
    /**
     * 展示/取消展示附近小程序
     * @param {*} option 
     * @example setShowStatus({access_token,poi_id,status});
     */
    async setShowStatus(option) {
        return await this.proxy.get(`${this.config.domain}/wxa/setnearbypoishowstatus`, option);
    }  
}


module.exports=new NearbyPoi();