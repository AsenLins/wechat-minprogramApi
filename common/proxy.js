import request from 'request-promise'

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
        //option.body=option.body?JSON.stringify(option.body):'';
        if(option.body&&option.body instanceof Object){
            option.body=JSON.stringify(option.body);
        }
        console.log(option);
        return await request.post(option.url,option)
    }

}




module.exports=new Proxy();