import {Duplex} from 'stream';
import Speaker from 'speaker';

const speaker = new Speaker({
    
});

function transmitCW(code: str[]): void {
    for(word of code){

    }
}
function receiveCW(): str[]{}

//Implement read, write, writev, destroy
class radioInterface extends Duplex {
    constructor(){
        super({encoding: 'utf-8'});
    }
    _read(size: int){};
    _write(chunk: str | Buffer, encoding: str, callback: Function){
        let code = chunk.toString('utf-8');
        try{
            transmitCW([code]);
            callback(null);
        } catch(err){
            callback(err);
        }
    };
    _writev(chunks: {chunk: str | Buffer, encoding: str}[], callback: Function){};
    _destroy(err: Error, callback: Function){};
};
export default radioInterface;
export {radioInterface};