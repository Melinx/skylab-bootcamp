
function bingo() {

        var carton = [];

        function getCarton() {
            while (carton.length < 5) {
                carton.push(Math.round(Math.random() * 9) + 1)
            }
            console.log(carton)
        }

        function getNumber() {
            return Math.round((Math.random() * 9) + 1)
        }

        function check(num) {
            count = 0;
            var num = getNumber();
            console.log('The new number is ' + num)

            for (var i = 0; i < carton.length; i++) {
                if (carton[i] === num) {
                    carton.splice(i, 1, 'X');
                }
            }
             
            console.log(carton)

	            for (var i = 0; i < carton.length; i++) {
	                if (carton[i] === 'X') {
	                    count++;
	                }
	            }
	            
	            if (count === 5) {
	                alert('FIN')
	            }
	            else {
	                askNewTurn()
	            }
        }

        function askNewTurn() {
            var c = confirm('Sorry, no match for now. Do you want to get another number?');
            if (c) {
                check();
            } else {
                return 0; 
            }
        }
        getCarton()
        getNumber()
        check()
    }

bingo()


/* funciona pero:
- no debería decir 'sorry no match' cuando sí se ha remplazado el match con una X

Me gustaria hacer:
- QUE los numeros get random no se repitan
*/
