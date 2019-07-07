const config=require('./common/config');
const request=require('request-promise');
const proxy=require('./common/proxy');
var fs = require('fs');
const login=require('./interface/login');
const accessToken=require('./interface/accessToken');
const qr=require('./interface/qr');
const cryptoRandomString = require('crypto-random-string');

//import proxy from './common/proxy';


class Base{
    constructor(option){
        this.config=config;
        this.proxy={};
    }
}

async function logintest(){
   const result= await login.code2Session('023c4l6G07u5uc2jMX5G082b6G0c4l6T');
   console.log(result);
} 

async function accessTokentest(){
    const result= await accessToken.get();
    console.log(result);
}

async function testPost(){
    /*
    const result= await request.post('https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode',{
        json:true,
        qs:{
            access_token:'23_aSix01zUU4e0dDis5Fn9JupE1WGlkNOZyqapS6XYUTSBVU42Z0EAVlq1f63Njod-bB3KUJaeMsiWoVXNUg6qTiOddGnkX5hJ0ljQZaDD9sSWidvcLa-zW25lpiQxWa07R9dbSjubZxIdKHj5NECiAJAEVT'
        },
        body:{
            path:'/home',
            width:'200px'
        }
    }).pipe(fs.createWriteStream('test.jpg'));
    */
    const result=await qr.create({
        accessToken:'23_aSix01zUU4e0dDis5Fn9JupE1WGlkNOZyqapS6XYUTSBVU42Z0EAVlq1f63Njod-bB3KUJaeMsiWoVXNUg6qTiOddGnkX5hJ0ljQZaDD9sSWidvcLa-zW25lpiQxWa07R9dbSjubZxIdKHj5NECiAJAEVT',
        width:'220px',
        path:'/home'
    });

    fs.writeFile('./test.png', result,'binary' ,function(err) {
        if(err) {console.log(err)}
        console.log('save img success');
    });   

}


async function testPost2(){
    const result=await qr.get({
        accessToken:'23_aSix01zUU4e0dDis5Fn9JupE1WGlkNOZyqapS6XYUTSBVU42Z0EAVlq1f63Njod-bB3KUJaeMsiWoVXNUg6qTiOddGnkX5hJ0ljQZaDD9sSWidvcLa-zW25lpiQxWa07R9dbSjubZxIdKHj5NECiAJAEVT',
        width:'220px',
        path:'/home'
    });
    fs.writeFile('./test.png', result,'binary' ,function(err) {
        if(err) {console.log(err)}
        console.log('save img success');
    });  

}

async function testPost3(){
    const result=await qr.getUnlimited({
        accessToken:'23_WD4VYK530MJvfMWFuAsw7mUsK2Q7wQMr6ZepmUfiskXWqtKZPs2UJHf_q9R6MIaB28YP_aKZdd5XmPuZSwWP1Wg-GYyubWzwgd_hYL4ZjwBNTNU3SnKPJ7ctDcw0pLXOeu1IjaiXbMP2frYWACAcABAIKI',
        width:'220px',
        scene:"a=1",
        page:'/home'
    });
    console.log(result);
    fs.writeFile('./test.png', result,'binary' ,function(err) {
        if(err) {console.log(err)}
        console.log('save img success');
    });  

}



async function testloginSign(){
    //session_key,rawData,signature
    const result=login.checkSign({
        session_key:'rQoGu+VlaK0y4aRA8rWKyg==',
        rawData:`{"nickName":" 森","gender":1,"language":"zh_CN","city":"Zhuhai","province":"Guangdong","country":"China","avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/ibniaxw2yYI0H4EeAIF6pEnJhPyErlBBxnHFuAnCRxUNZFRatcnrGgibJEK89qQvsR9NZcFt8VGfJQLicXjS10dbibw/132"}`,
        signature:'33a1b11bf5754071bf55018541f46e3b5f3dfa5b'
    });

    console.log('校验',result);
}

async function testlogindecryptData(){
   const result=login.decryptData({
        encryptedData:'14EhX/5VVffSyALakqnxTuvVn8M+xO91l7gJVGDL48cSUmJFgmcDEiyFrYgLzrSSZrLc8BTh2s/P+fU5ruFzVh4h8l1jqLgnJkmFCFdH8lNuF0yOqlIp7eBsaLGXgMszEjpOfAImmVXSPjoH8dncwWU4yadmraCWevfkYH7dQOHzThtnnjokdQh+kVd5z6aqtdbXWfMye3g0Hm3HTuNC2mSTBidQh4gKGpJdih43+E2asQIrMDQk80NBz8SAB7f7PHVLq0pIJa7zBJlz24fTu7kxnq8GdX8WSgaDhHRkVdxM5tnOKPVviYT+XCDskivCBv8hkUiKp3rUIf4+nS96FWl1aD2dyXhYe9HmAlPPNnNsnWQ8KskBiPOhrU4zX+WuCpPREnkSD+CP7dPK0mRBL/bhlaHhKgOYYNAx8Axyp5Mo0CGQpeUAEj6TzVqp0vqOlxs4dcTwlHDe3A90iraNLhsAL4mj+YFsy221mwhhQRI=', 
        sessionKey:'rQoGu+VlaK0y4aRA8rWKyg==', 
        iv:'PP88zYB1y+9Ns8uwRNJElw=='
    });

    console.log('decryptData=',result);
}


const option={
    nonce_str:"123"
}

const nonce_str=option.nonce_str||cryptoRandomString({length:32}).toLocaleUpperCase();

console.log('random=',nonce_str);

//logintest();
//testloginSign();
//testlogindecryptData();

//testPost();
//testPost2();
//testPost3();
//accessTokentest();


//appid=wx515e04dea1390dd5&secret=58fc9e72c8c07df09e195c5a3330819f&js_code=043JozqE17Oi380pR6rE17lBqE1Jozqq&grant_type=authorization_code
/*
async function test(){
    const result=await request.get(`https://api.weixin.qq.com/sns/jscode2session`,{
        qs:payload
    })
    
    console.log(result);

}//sns/jscode2session
*/
//test();






//console.log(base);