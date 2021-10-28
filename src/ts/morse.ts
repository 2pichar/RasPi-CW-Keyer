/*
Image links:
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/International_Morse_Code.svg/1200px-International_Morse_Code.svg.png
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpzHvKRuq76OUPncSblOahfmVcC0vAx9XkOxC_TBg19gkkcMfIClCgKIpoUvUyxY8SQI:https://www.boxentriq.com/img/morse-code/morse-code-overview.png&usqp=CAU
*/
var alphabet: {[char: str|int]: str} = {
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
    'n':'-.',
    'o':'---',
    'p':'.--.',
    'q':'--.-',
    'r':'.-.',
    's':'...',
    't':'-',
    'u':'..-',
    'v':'...-',
    'w':'.--',
    'x':'-..-',
    'y':'-.--',
    'z':'--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....--',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    ',':'',
    '?': '. . ... ... . .',
    '.':'',
    ' ': ''
};
function toMorse(text: str): str[] {
    let words: str[] = text.split(' ');
    let coded: str = [];
    let word: str;
    for(word of words){
        let code: str[] = [];
        let letter: str;
        for(letter of word){
            code.push(alphabet[letter]);
        }
        coded.push(code.join(' '));
    }
    return coded;
};

function fromMorse(code: str[]): str {
    let text = '';
    let codes = Object.values(alphabet);
    let letters = Object.keys(alphabet);
    let word: string;
    let letter: str;
    for(word of code){
        for(letter of word){
            let ind: int = codes.indexOf(letter);
            text += letters[ind];
        }
        text += ' ';
    }
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