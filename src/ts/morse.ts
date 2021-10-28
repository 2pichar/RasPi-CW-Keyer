/*
Image links:
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/1200px-International_Morse_Code.svg.png
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpzHvKRuq76OUPncSblOahfmVcC0vAx9XkOxC_TBg19gkkcMfIClCgKIpoUvUyxY8SQI:https://www.boxentriq.com/img/morse-code/morse-code-overview.png&usqp=CAU
*/
var alphabet = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i':'..',
    'j':'.---',
    'k':'-.-',
    'l':'.-..',
    'm':'--',
    'n':'',
    'o':'',
    'p':'',
    'q':'',
    'r':'',
    's':'',
    't':'',
    'u':'',
    'v':'',
    'w':'',
    'x':'',
    'y':'',
    'z':''
}; // Add alphabet and conversions
function toMorse(text: str): str[] { // TODO: implement toMorse function
    let code = [];
    for(let letter of text){
        code.push(alphabet[letter]);
    }
    return code;
};

function fromMorse(code: str[]): str { // TODO: implement fromMorse function
    let text = '';
    return text;
};

function morse(text: str): str[] {
    return toMorse(text);
};


function to(text: str): str[] {
    return toMorse(text);
};
function from(code: str[]): str {
    return fromMorse(code);
};

export default morse;
export {morse, toMorse, fromMorse, to, from};