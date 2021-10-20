import {Duplex} from 'stream';

//Implement read, write, writev, destroy
class radioInterface extends Duplex {
    constructor(){
        super({encoding: 'utf-8'});
    }
    _read(size: int){};
    _write(chunk: str | Buffer, encoding: str, callback: Function){};
    _writev(chunks: {chunk: str | Buffer, encoding: str}[], callback: Function){};
    _destroy(err: Error, callback: Function){};
};
export default radioInterface;
export {radioInterface};