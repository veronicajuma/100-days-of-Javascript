console.log("0 || 1 = "+(0 || 1));//returns the first true expression since 0 is evaluated and considered false, 1 is printed(the true value) 
 console.log("1 || 2 = "+(1 || 2)); //returns 1 as it is the first expression to be evaluated and it is true so the operation is terminated after it is considered true.
 console.log("0 && 1 = "+(0 && 1)); //returns 0 as it is the first expression that is evaluated and returns false 
 console.log("1 && 2 = "+(1 && 2));//returns 2 as both expressions are evaluated as they are true and the righ-hand side expression is printed out.
