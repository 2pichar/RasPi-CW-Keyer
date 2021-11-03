import radioInterface from './radio' // Import radio interface module
import * as user from './user' // Import UI module
import * as morse from './morse' // Import morse code converter
import {pipeline} from 'stream'

var radio = new radioInterface(); // Create radio interface
/*radio.on('data', (data) => {
    ui.write(morse.from(data));
});*/

var ui = new user.UI(process.stdin, process.stdout); // Create UI
/*ui.on('data', (data) => {
   radio.write(morse.to(data)); 
});*/
pipeline( // user input pipeline
    ui,
    async function*(data){
        for await (let i of data) {
            yield morse.to(i);
    }},
    radio,
    (err => {(err)? console.error(err): console.log('complete');})
);
pipeline( // radio input pipeline
    radio,
    async function*(data){
        for await (let i of data){
            yield morse.from(i);
        }
    },
    ui,
    (err => {(err)? console.error(err): console.log('complete');})
)