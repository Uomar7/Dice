$(document).ready(function(){
    $("form#names").submit(function(e) {
        e.preventDefault();

        function Player() {
            this.name="";
            this.totalScore= 0;
            this.diceScore= 0;
        };

//roll method
var roll = Math.floor(Math.random() * 6 + 1);
function rollDice() {
    roll
}
    });
});