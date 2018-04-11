// CALCULATOR

// 3 Decimales max. 
//var num = 8.56789; 
//var n = num.toFixed(3) // i arrodoneix
//  dos parámetros y el usuario podrá visualizar por 
// consola la suma, resta, multiplicación y división entre ambos números. 
// Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]
//

		function calculate (num1, num2) {

			var resta = num1 - num2;
			var sum = num1 + num2;
			var div = num1 / num2;
			var multi = num1 * num2;

				console.log("results => " + [resta, sum, div, multi].join("; "));
			}
		 calculate(77,4)

		//  results => 73; 81; 19.25; 308

   			var subs = num1 - num2;
            var sum = num1 + num2;
            var div = num1 / num2;
            var multi = num1 * num2;
                    	
                    	var results = [subs, sum, div, multi];
     		
     		var num1 = "rr";
 			var num2 = 0;

		if (typeof num1 !== "number"){
       		console.log("Please insert two numeric values")
		        }else{
			console.log('yayyyy :)')
				}

			if(typeof num2 !== "number"){
				console.log("Please insert two numeric values")
				 }else{
			console.log('yayyyy :)')
				}
        	for(var i = 0; i<results.length; i++){

        	 if(results[i].toString().indexOf('.')!== -1){
					results[i] = results[i].toFixed(3)
				}
			}


			function calculate (num1, num2) {

 			console.log("results => \n" + 'The results of ' +num1 +' and ' + num2 
                	+ ' are ' + '\n sum => ' +results[1] + '\n subs => ' 
                	+results[0] + '\n mult => ' +results[3] + '\n div => ' +results[2]);
        }

calculate("SSS",4542)



//  result display + Alternative using .join() but missing object
 				+num1 +' and '+ num2 + ' are ' + 
 				[results.join(' | ')];

