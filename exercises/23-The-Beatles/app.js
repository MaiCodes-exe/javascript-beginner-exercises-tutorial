
function sing (){
    var result = ""
    for (let i = 0; i< 12; i++){
        if ( i == 4) {
            result = result + "whisper words of wisdom, ";
        }
        else if ( i == 10){
            result = result +  "there will be an answer, ";
        }
        else if (i == 11) {
            result = result + "let it be"
        }
        else  result = result + "let it be, ";
    }
    return result  
}
//Your code above ^^^

console.log(sing());
