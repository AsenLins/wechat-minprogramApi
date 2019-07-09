import proxy from '../common/proxy';
import config from '../common/config';

class Base{
    constructor(){
        this.proxy=proxy;
        this.config=config
    }
}


module.exports=Base;