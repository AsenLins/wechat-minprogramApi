const path=require('path');
var customConfig=null;

try{
     customConfig=require(path.join(process.cwd(),'wx.config.js'));
}catch(err){

}

class Config{
    constructor(){
        this.init();
    }
    /**
     * 初始化微信配置
     */
    init(){
        this.wxParams=customConfig!==null?customConfig:{
            appid:"",
            secret:"",    
            mch_id:"",
            domain:"",
            paydomain:"",
            paykey:"",
            refundCAPath:'',
            notify_url:""
        }
    }
    /**
     * 
     * @param {*} param0 
     */
    setConfig(option={appid,secret,mch_id,domain,paydomain,paykey,refundCAPath,notify_url}){
        const configKeys=Object.keys(option);
        configKeys.forEach(key=>{
            this.wxParams[key]=option[key];
        })
    }
    /**
     * 获取微信参数
     */
    getConfig(){
        return this.wxParams;
    }

}

module.exports=new Config();