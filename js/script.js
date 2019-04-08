$(document).ready(function(){
    $("form#names").submit(function(e) {
        e.preventDefault();

        function Player() {
            this.name="";
            this.totalScore= 0;
            this.diceScore= 0;
        };
 var playerOne = new Player(); 
 var playerTwo = new Player();       

//roll method
Player.prototype.roll = function(){
   var rolls = Math.floor(Math.random() * 6 + 1);

   if(rolls>1){
       this.cumulatingScore+=rolls;
   } else {
       this.cumulatingScore = 0;
   }
   return rolls
};
// displaying total score
$("button#roller-one").click(function(){
    document.getElementById("total1").innerHTML= playerOne.roll();
});

$("button#roller-two").click(function(){
    document.getElementById("total2").innerHTML= playerTwo.roll();
});
Player.prototype.Hold= function(){
    
    this.totalScore+=cumulatingScore;
}

    });
});