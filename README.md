# wechat-minprogramApi
微信小程序Node服务端Api-Sdk

### 支持的Api
- [x] 登录
- [x] 用户信息
- [x] 接口调用凭证
- [x] 数据分析
- [x] 模板消息
- [x] 小程序二维码
- [x] 小程序支付


### 使用方法
- 在根目录中新建配置文件`wx.config.js`

```

module.exports={
    appid:"小程序appid",
    secret:"小程序secret",    
    mch_id:"商户id(如需支付，请设置)",
    domain:"小程序API网关地址",
    paydomain:"小程序支付网关地址",
    paykey:"支付的商户key",
    refundCAPath:'支付商户证书.p12的路径(若要调用退款,请设置此路径)'
}

```

- 在程序中配置

```
const wxConfig=require('wx-minprogram').config;

wxConfig.setConfig({
    appid:"小程序appid",
    secret:"小程序secret",    
    mch_id:"商户id(如需支付，请设置)",
    domain:"小程序API网关地址",
    paydomain:"小程序支付网关地址",
    paykey:"支付的商户key",
    refundCAPath:'支付商户证书.p12的路径(若要调用退款,请设置此路径)'  
})

```

### 引入方式

```
/*所有接口引入*/
const wx=require('wx-minprogram');

/*单独引入*/
const wxAuth=require('wx-minprogram').auth;

```


### 方法调用
- 方法都采用async/awit方式。
- 方法的接口参数都是完全参照微信小程序文档，按需传入即可。

使用如下：

```
const wxAuth=require('wx-minprogram').auth;

async function login(){
    const result=await wxAuth.code2Session({
        js_code:'....'
    });

    console.log(result);
    /*
        输出结果如下：
        {
            openid:'...',
            session_key:'...'
        }
    */
    
}

```

