const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr_del_10=[];
    let arr_str='';
    let begin_slice=0;
    let result='';
    let length_1=Math.floor(expr.length/10);
    let key = Object.keys(MORSE_TABLE);
    for(let i=0; i<length_1; i++){
        arr_del_10[i]=String(expr).slice(begin_slice, begin_slice+10);
        begin_slice+=10;
    }
    for(let i=0; i<length_1; i++){
        if(arr_del_10[i]=='**********'){
            result+=' ';
        }else{
            for(let j=0; j<9; j=j+2){
                let temp=arr_del_10[i][j]+arr_del_10[i][j+1];
                if(temp=='10'){
                    arr_str+=".";
                }else if(temp=='11'){
                    arr_str+="-";
                }
            }
            for(let i=0; i<key.length; i++){
                if (arr_str==key[i]){
                    result+=MORSE_TABLE[key[i]];
                }
            }
            arr_str='';
        } 
    }
    let m=0;
    
    return result;
}

module.exports = {
    decode
}

