function getRandomInt()
{
	var randomNumber = Math.random() * (1  +6) +1;
	return Math.floor(randomNumber);
}
console.log(getRandomInt());