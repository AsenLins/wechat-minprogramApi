const acode = require('../../src/interface/acode');
const auth = require('../../src/interface/auth');
const assert = require('assert');


describe('acode test', () => {
  let access_token="";
  before(async () => {
    const result=await auth.getAccessToken();
    access_token=result.access_token;
    console.log('access_token',access_token);
  });

  it('acode.get', async() => {
    const result=await acode.get({
      path:'pages/home'
    });
    assert(result);
   
  });

  it('acode.createQRCode', async() => {
    const result=await acode.createQRCode({
      path:'pages/home'
    });
    assert(result);
   
  });

  it('acode.get', async() => {
    const result=await acode.getUnlimited({
      path:'pages/home'
    });
    assert(result);
   
  });


});