const proxy=require('../common/proxy');
const config=require('../common/config');


class Base{
    constructor(){
        this.proxy=proxy;
        this.config=config.wxParams;
    }
}


module.exports=Base;