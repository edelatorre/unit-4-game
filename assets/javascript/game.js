$( document ).ready(function(){

    var randomComputer = randomIntFromInterval(19, 120);
    var randomBlue = Math.floor(Math.random() * 12) + 1;
    var randomGreen = Math.floor(Math.random() * 12) + 1;    
    var randomRed = Math.floor(Math.random() * 12) + 1;
    var randomYellow = Math.floor(Math.random() * 12) + 1;
    var score = null;
    var wins = 0;
    var loses = 0;

    console.log('RandomComputer: '+ randomComputer);
    console.log('randomBlue: '+randomBlue);
    console.log('randomRed: '+randomRed);
    console.log('randomGreen: '+randomGreen);
    console.log('randomYellow: '+randomYellow);

    $('#randomNumber').text(randomComputer);

    function reset(){
        randomComputer = randomIntFromInterval(19, 120);
        randomBlue = Math.floor(Math.random() * 12) + 1;
        randomGreen = Math.floor(Math.random() * 12) + 1;    
        randomRed = Math.floor(Math.random() * 12) + 1;
        randomYellow = Math.floor(Math.random() * 12) + 1;
        score = 0;
        $('#finalTotal').text(score);
        $('#randomNumber').text(randomComputer);

        console.log('RandomComputer: '+ randomComputer);
        console.log('randomBlue: '+randomBlue);
        console.log('randomRed: '+randomRed);
        console.log('randomGreen: '+randomGreen);
        console.log('randomYellow: '+randomYellow);
    }

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function addScoreAndCheck(randomColor){
        score += randomColor;
        $('#finalTotal').text(score);

        if(score === randomComputer){
            alert('CONGRATS!! YOU HAVE WIN');
            wins ++;
            $('#numberWins').text(wins);
            reset();

        }

        if(score > randomComputer ){
            alert('SORRY!! YOU LOST THIS MATCH');
            loses ++;
            $('#numberLosses').text(loses);
            reset();
        }
    };

    $("#one").on( "click", function(){
        addScoreAndCheck(randomBlue);
    });
    
    $("#two").on( "click", function(){
        addScoreAndCheck(randomGreen);
    }); 

    $("#three").on( "click", function(){
        addScoreAndCheck(randomRed);
    });
    
    $("#four").on( "click", function(){
        addScoreAndCheck(randomYellow);
    });  

    console.log('score: '+score);
});