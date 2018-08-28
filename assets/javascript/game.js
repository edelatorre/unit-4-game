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

    function randomIntFromInterval(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function addScore(randomColor){
        score += randomColor;
        $('#finalTotal').text(score);
    }

    $("#one").on( "click", function(){
        addScore(randomBlue);
    });
    
    $("#two").on( "click", function(){
        addScore(randomGreen);
    }); 

    $("#three").on( "click", function(){
        addScore(randomRed);
    });
    
    $("#four").on( "click", function(){
        addScore(randomYellow);
    });  

    console.log('score: '+score);
});