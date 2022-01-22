var total = prompt('How many km are left to go?');

// Your code below:
if (total > 100) { 
   result = "We still have a bit of driving left to go";
}
if (total > 50){
   result = "We'll be there in 5 minutes";
}
if (total <= 50){
   result = "I'm parking. I'll see you right now.";
}