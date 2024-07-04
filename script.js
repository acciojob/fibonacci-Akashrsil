function fibonacci(num) {
// your code here
	if(num==1)
		return 0;
	let num1=0;
	let num2=1;
	let sum=0;
	for( let i=0;i<num-2;i++)
		{
			sum=sum+num1+num2;
			num1=num2;
			num2=sum;
        }
	return num2;
	
}

module.exports = fibonacci;
