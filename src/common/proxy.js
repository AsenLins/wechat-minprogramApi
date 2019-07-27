
const request=require('request-promise');

/**
 * HTTP代理
 */
class Proxy{
    constructor(){
        
    }
    async get(option){
        return JSON.parse(await request.get(option.url,{
            qs:option.payload
        }));        
    }
    async post(option,raw){
        //option.body=option.body?JSON.stringify(option.body):'';
        if(option.body&&option.body instanceof Object){
            option.body=JSON.stringify(option.body);
        }
        const result=await request.post(option.url,option);
        return raw?result:JSON.parse(result);
    }
    
    async sendPostWithAccessToken(option){
        const { access_token,url } = option;

        return await this.post({
            encoding: null,
            url,
            qs: {
                access_token
            },
            body: option         
        });
    }

}




module.exports=new Proxy();