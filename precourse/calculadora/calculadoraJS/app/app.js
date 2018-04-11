
//I was trying to activate the button by enter key but no success so far

var buts = document.getElementById('but').onlick=function(e){
    if(event.keyCode===13){
        document.getElementById('but').click();
    }}



function calculate(){

	var n1 = parseInt(document.getElementById('n1').value)
	var n2 = parseInt(document.getElementById('n2').value)

	var sum = n1 + n2
	var subs = n1 - n2
	var mult = n1 * n2
	var div = n1 / n2

document.getElementById('results').innerHTML = 
			'<li>' + n1 + ' + ' + n2 + ' = ' + sum + '</li>' +
			'<li>' + n1 + ' - ' + n2 + ' = ' + subs + '</li>' +
			'<li>' + n1 + ' x ' + n2 + ' = ' + mult + '</li>' +
			'<li>' + n1 + ' / ' + n2 + ' = ' + div + '</li>' 
}
		
function addElement(){

	var specs = parseInt(document.createElement('codeSpecs').value);

		if (typeof n1 !== "number"){
	   		alert("Please insert two numeric values")
	   		return 0;
	    } else if (typeof n2 !== "number"){
			alert("Please insert two numeric values")
			return 0;
		}else{
		calculate();		
		}

		for(var i = 0; i<results.length; i++){
        	 if(results[i].toString().indexOf('.')!== -1){
				results[i] = results[i].toFixed(3)
			}
	}
	
    	
}

