const Config = require('../../src/common/config.js');

const assert = require('assert');


describe('Config test', () => {

  it('Config.init',()=>{
    Config.init();
    assert(typeof Config.getConfig());
  });  
  
  it('Config.getConfig',()=>{
    const configObj=Config.getConfig();
    assert(typeof configObj==='object');
  })
  
  it('Config.setConfig', () => {
    const appid='testAppid';
    Config.setConfig({
      appid
    });
    const configObj=Config.getConfig();
    assert(configObj.appid===appid);
  });
 
});

