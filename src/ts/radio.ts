import {Duplex} from 'stream';

const unit = 100; //length of a dot in milliseconds

async function delay(timeout: int): Promise<void> {
    /* delays for timeout milliseconds */
    await new Promise(resolve => setTimeout(resolve, timeout));
}
async function transmit(length): Promise<void> {
    /*sets headphone jack to high for length milliseconds */
    
}
async function transmitCW(code: str): Promise<void> {
    /*Iterate through code, for each letter in code, write letter to headphone jack */
    for(let i = 0; i < code.length; i++) {
        let letter = code[i];
        switch(letter) {
            case '.':
                await transmit(unit);
                break;
            case '-':
                await transmit(unit * 3);
                break;
            case '*':
                break;
        }
        await delay(unit);
    }
}
function* receiveCW(): Generator<string> {
    /* reads from headphone jack, returns array of cw words */
    while(true) {
        // read input, parse as morse code
        let code = '';
        yield code;
    }
}

//Implement read, write, writev, destroy
class radioInterface extends Duplex {
    constructor(){
        super({encoding: 'utf-8'});
    }
    _read(_size: int){
        this.push(receiveCW());
    };
    _write(chunk: str | Buffer, _encoding: str, callback: Function){
        let code = chunk.toString('utf-8');
        try{
            transmitCW(code);
            callback(null);
        } catch(err){
            callback(err);
        }
    };
    _writev(chunks: {chunk: str | Buffer, encoding: str}[], callback: Function){
        for(let chunk of chunks){
            this._write(chunk.chunk, chunk.encoding, callback);
        }
    };
    _destroy(err: Error, callback: Function){};
};
export default radioInterface;
export {radioInterface};