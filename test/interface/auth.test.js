const auth = require('../../src/interface/auth.js');
const assert = require('assert');

describe('auth test', () => {
  
  it('getAccesstoken',async () => {
    const result=await auth.getAccessToken({cache:true});
    assert(result.access_token);
  });


  it('code2Session',async () => {
    const result=await auth.code2Session({
      js_code:'test'
    });
    assert(result.errmsg);
  });

  it('getPaidUnionId',async()=>{
    const result=await auth.getPaidUnionId({
      openid:'test'
    });
    assert(result.errmsg);
  });




  


});