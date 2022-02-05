// Your code here:
function milk(bottles) {
    for (let i = bottles ; i >= 1; i--){
        if (i == 2){
              console.log(i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + (i -1) + " bottle of milk on the wall. " );
          i--    
        }
       if (i == 1){
         console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no bottles of milk on the wall." );
         i--
        }        
        if (i == 0){
        console.log("No bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");        
        }
        else{
    console.log(i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + (i -1) + " bottles of milk on the wall. " );
        }
    }
};
console.log(milk(99));