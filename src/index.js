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
	let result =[];
	let symbolsArr = [];
    for (var i = 0; i<expr.length; i+=10){
    	symbolsArr.push(expr.slice(i, i+10));
    }
    for (var i = 0; i<symbolsArr.length; i++){
    	let transcriptedSymbol = ''
    	if(symbolsArr[i].startsWith('0')){
    		symbolsArr[i] = symbolsArr[i].slice(symbolsArr[i].indexOf('1'));
    		for (var j = 0; j<symbolsArr[i].length; j+=2){
    			if(symbolsArr[i][j] + symbolsArr[i][j+1] == '10'){
    				transcriptedSymbol += '.'
    			}
    			else{
    				transcriptedSymbol += '-'
    			}
    		}
    	}
    	else if(symbolsArr[i].startsWith('*')){
    		transcriptedSymbol += ' ';
    	}
    	else{
    		for (var j = 0; j<symbolsArr[i].length; j+=2){
    			if(symbolsArr[i][j] + symbolsArr[i][j+1] == '10'){
    				transcriptedSymbol += '.'
    			}
    			else{
    				transcriptedSymbol += '-'
    			}
    		}
    	}
    	result.push(transcriptedSymbol);
    }

    let xresult = result.map(x=>{
	if(x == " "){
		return " "
	}
	else{ return MORSE_TABLE[x];
		}
	});
	return xresult.join('');
}

module.exports = {
    decode
}