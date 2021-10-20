import radioInterface from './radio' // Import radio interface module
import * as user from './user' // Import UI module
import * as morse from './morse' // Import morse code converter

var radio = new radioInterface(); // Create radio interface
radio.on('data', (data) => {
    console.log(morse.from(data));
});

var ui = new user.UI(process.stdin); // Create UI
ui.on('data', (data) => {
   radio.write(morse.to(data)); 
});