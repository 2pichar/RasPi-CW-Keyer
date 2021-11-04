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
    ' ': '*****'
};
function toMorse(text: str): str {
    let coded: str = '';
    let chars: str[] = [];
    for(let i = 0, letter = ''; i < text.length; i++, letter = text[i]){
        chars.push(alphabet[letter]);
    }
    coded = chars.join('*')
    return coded;
};

function fromMorse(code: str): str {
    let cwords: str[] = [];
    let codes: str[] = alphabet.values();
    let chars: str[] = alphabet.keys();
    let words: str[] = code.split('*******');
    let word: string;
    let letter: str;
    for(word of words){
        let letters: str[] = word.split('*');
        for(letter of letters){
            let ind: int = codes.indexOf(letter);
            cwords.push(chars[ind]);
        }
    }
    return cwords.join(' ');
};

function morse(text: str): str {
    return toMorse(text);
};


function to(text: str): str {
    return toMorse(text);
};
function from(code: str): str {
    return fromMorse(code);
};

export default morse;
export {morse, toMorse, fromMorse, to, from};