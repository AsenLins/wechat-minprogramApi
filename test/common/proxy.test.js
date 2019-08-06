const Proxy = require('../../src/common/proxy.js');
const Config=require('../../src/common/config');
const assert = require('assert');



describe('Proxy test', () => {

  before(async () => {
    Config.setConfig({
      domain:'https://api.weixin.qq.com'
    });
  });
  it('Proxy.get',async () => {
    const configObj=Config.getConfig();
    const result=await Proxy.get({
      url:`${configObj.domain}/sns/jscode2session`
    });
    assert(result.errmsg);
  });

  it('Proxy.post',async () => {
    const configObj=Config.getConfig();
    const result=await Proxy.post({
      url:`${configObj.domain}/wxa/getwxacodeunlimit`,
    });
    assert(result.errmsg);
  });

  it('Proxy.sendPostWithAccessToken',async () => {
    const configObj=Config.getConfig();
    const result=await Proxy.sendPostWithAccessToken({
      url:`${configObj.domain}/wxa/getwxacodeunlimit`
    });
    assert(result.errmsg);
  });


});