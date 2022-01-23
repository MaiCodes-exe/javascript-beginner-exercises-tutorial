function fizzBuzz() {  
	// Your code here
	for (let i= 1; i<= 100; i++){
		if (i % 3 == 0 && i % 5 == 0){
			console.log("FizzBuzz")
		}
		else if(i % 5 == 0){
			console.log ("Buzz")
		}
		else if (i % 3 == 0){
			console.log("Fizz")
		}
		else{
			console.log(i)
		}
	}
	
	
	//for(let c= 3 && c= 5; c<= 100; c = c + )
}
fizzBuzz();