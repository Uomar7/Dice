$(document).ready(function(){
    $("form#names").submit(function(e) {
        e.preventDefault();

        function Player() {
            this.name="";
            this.totalScore= 0;
            this.cumulatingScore= 0;
        };

 var playerOne = new Player(); 
 var playerTwo = new Player();       

//roll method
Player.prototype.roll = function(){
   var rolls = Math.floor((Math.random()*6) + 1);

   if(rolls>1){
       this.cumulatingScore+=rolls;

   } else {
       this.cumulatingScore = 0;
       
   }
   return rolls
};

// displaying total score

$("button#roller-one").click(function(){
    document.getElementById("rollDice").innerHTML= playerOne.roll();
});

        $("button#roller-two").click(function(){
    document.getElementById("rollDice2").innerHTML= playerTwo.roll();
});

Player.prototype.hold = function(){

    this.totalScore += this.cumulatingScore;
    this.cumulatingScore = 0;
    return this.totalScore;

};

//calculating total score
$("#hold-one").click(function() {

    document.getElementById("total1").innerHTML= playerOne.hold();
    $("#p1").addClass("panelDisable");
    $("#roller-one").addClass("panelDisable");
    $("#hold-one").addClass("panelDisable");
    $("#p2").removeClass("panelDisable");
    $("#hold-two").removeClass("panelDisable");
    $("#roller-two").removeClass("panelDisable");
    
});

$("#hold-two").click(function() {


    document.getElementById("total2").innerHTML= playerTwo.hold();
    $("#p2").addClass("panelDisable");
    $("#roller-two").addClass("panelDisable");
    $("#hold-two").addClass("panelDisable");
    $("#p1").removeClass("panelDisable");
    $("#hold-one").removeClass("panelDisable");
    $("#roller-one").removeClass("panelDisable");
    
});
  playerOne.name = $("input#firstPlayer").val();
  playerTwo.name = $("input#secondPlayer").val();

  document.getElementById("play1").innerHTML = playerOne.name;
  document.getElementById("play2").innerHTML = playerTwo.name;
   
  $("#sub").click(function(){
      $("#names").fadeOut();
  })
    });
});