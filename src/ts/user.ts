import * as readline from 'readline';
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
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
export default onInput;
export {onInput, input};