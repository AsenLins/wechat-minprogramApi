var request = require('request-promise');

/**
 * HTTP代理
 */
class Proxy{
    constructor(){
        
    }
    async get(option){
        return await request.get(option.url,{
            qs:option.payload
        })       
    }
    async post(option){
        return await request.post(option.url,{
            encoding:option.encoding,
            qs:option.query,
            json:true,
            body:option.payload
        })
    }

}




module.exports=new Proxy();