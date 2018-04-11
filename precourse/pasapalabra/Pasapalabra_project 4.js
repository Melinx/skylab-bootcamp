var round = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
];

function game (){

    round_pasa = [];
        var count_right = 0;
        var count_wrong = 0;
        var count_pasa = 0;
        
    function pasapalabra(){

        var round_pasa = [];
        for (var q =0; q<round.length; q++) {
            var round_quest = prompt(round[q].question);
                if (round_quest === round[q].answer) {
                    round[q].status = 1;
                    alert('YES! The answer is correct! +1 point for you.');
                } else if (round_quest === 'pasapalabra'){
                    round[q].status = 0;
                    alert('Pasapalabra it is! Til next round.');
                        round_pasa.push(round[q]);
                } else {
                    round[q].status = 2;
                    alert('Oh, NO! Wrong answer...');
                }
        }

        function statuses(){

            for (var i =0; i<round.length; i++) {
                if (round[i].status === 1){
                    count_right +=1;
                } else if (round[i].status === 0){
                    count_pasa +=1;
                } else if (round_quest === null){
                    return 0;
                } else { // when status is 2
                    count_wrong +=1;
                }
            }
            console.log('ACIERTOS: ' + count_right)
            console.log('FALLOS: ' + count_wrong)
            console.log('Pasapalabras: ' + count_pasa)
        }
        statuses()
        round = round_pasa;

            if (round_pasa.length === 0){
                alert('FIN DEL JUEGO.' + '\nEl total de aciertos es de: ' + count_right  
                    + '\nEl total de fallos es de: ' + count_wrong)
            } else {
                pasapalabra();
            }
    }
    pasapalabra() 
}
game()
