
const request=require('request-promise');

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
    async sendPostWithAccessToken(option){
        const { access_token } = option;
        return await this.post({
            encoding: null,
            url,
            qs: {
                access_token
            },
            body: option         
        })
    }

}




module.exports=new Proxy();