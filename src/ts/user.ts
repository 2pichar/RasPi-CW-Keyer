import * as readline from 'readline';
import * as events from 'events'; // Get events?
import {Readable} from 'stream';
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
rl.prompt(true);
async function input(prompt: str): Promise<str> {
  return new Promise((resolve, reject) => {
    try{
      rl.question(prompt, (answer)=>{
        resolve(answer);
      })
    } catch(e){
      reject(e);
    }
  });
}
function onInput(callback): void{
  process.stdin.on('data', callback);
}

class UI extends Readable {
    private _src: any;
    constructor(src) {
        super({encoding: 'utf-8'});
        this._src = src;
        this._src.on('data', (data)=> {
          this.push(data);
          this.emit('input');
        });
    };
    _read(size){
        this._src.read(size);
    }
}

export default UI;
export {onInput, input, UI};