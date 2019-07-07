const Base=require('./base');
const crypto = require('crypto');
const WXBizDataCrypt = require('../tools/WXBizDataCrypt');
class Login extends Base{
    constructor(){
        super();
      

    }
    
    /**
     * 微信服务端登录
     * @param {微信小程序登录的code} js_code 
     * @param {授权类型} grant_type 
     */
    async code2Session(js_code,grant_type="authorization_code"){
        const {appid,secret}=this.config;
        return await this.proxy.get({
            url:`${this.config.domain}/sns/jscode2session`,
            payload:{
                appid,
                secret,
                js_code,
                grant_type
            }
        });
    }

    /**
     * 校验微信小程序用户信息
     * @param {wx.login登录的session_key} session_key 
     * @param {微信小程序用户信息的userInfo.rawData} rawData 
     * @param {微信小程序用户信息的userInfo.signature} signature 
     */
    checkSign(option){
        const {session_key,rawData,signature}=option;
        if(session_key===undefined||rawData===undefined||signature===undefined||rawData===undefined){
            return false;
        }

        console.log(session_key,rawData);

        const serverSign=crypto.createHash('sha1').update((rawData+session_key)).digest('hex');
        console.log(serverSign,'===',signature);
        return signature===serverSign;
    }

    /**
     * 解析微信小程序encryptedData
     * @param {*} encryptedData 微信小程序的userInfo.encryptedData
     * @param {*} sessionKey wx.login登录后的sessionKey
     * @param {*} iv 加密算法的初始向量
     */
    
    decryptData({encryptedData,sessionKey,iv}){
        const {appid}=this.config;
        const wxBizDataCrypt=new WXBizDataCrypt(appid,sessionKey);

        return wxBizDataCrypt.decryptData(encryptedData,iv)
    }


}


module.exports=new Login();

