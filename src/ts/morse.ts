var alphabet = {}; // Add alphabet and conversions
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