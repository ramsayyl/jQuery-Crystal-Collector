window.onload = function() {

  crystals.totalNumbers();
  crystals.scoreUpdate();
  crystals.winCheck();

};

var crystals = {

  wins: 0,
  losses: 0,
  targetScore: Math.floor(Math.random() * 120) + 19,
  yourScore: 0,
  crystal1: Math.floor(Math.random() * 12) + 1,
  crystal2: Math.floor(Math.random() * 12) + 1,
  crystal3: Math.floor(Math.random() * 12) + 1,
  crystal4: Math.floor(Math.random() * 12) + 1,

  totalNumbers: function() {

    $("#crystal1").on("click", function(){
      crystals.yourScore += crystals.crystal1;
      $("#score").text(crystals.yourScore);
      crystals.winCheck();

    });

    $("#crystal2").on("click", function(){
      crystals.yourScore += crystals.crystal2;
      $("#score").text(crystals.yourScore);
      crystals.winCheck();

    });

    $("#crystal3").on("click", function(){
      crystals.yourScore += crystals.crystal3;
      $("#score").text(crystals.yourScore);
      crystals.winCheck();

    });

    $("#crystal4").on("click", function(){
      crystals.yourScore += crystals.crystal4;
      $("#score").text(crystals.yourScore);
      crystals.winCheck();
    });

  },

  scoreUpdate: function() {
    $("#target").text(crystals.targetScore);
    $("#score").text(crystals.yourScore);
    $("#winDisplay").text(crystals.wins);
    $("#lossDisplay").text(crystals.losses);



    console.log(crystals.targetScore);
    console.log(crystals.crystal1);
    console.log(crystals.crystal2);
    console.log(crystals.crystal3);
    console.log(crystals.crystal4);
  },

  winCheck: function() {

    if(crystals.yourScore === crystals.targetScore) {
      crystals.wins++
      $("#winDisplay").text(crystals.wins);
      crystals.reset();
    }
    else if (crystals.yourScore > crystals.targetScore) {
      crystals.losses++;
      $("#lossDisplay").text(crystals.losses);
      crystals.reset();
    }
  },

  reset: function() {
    crystals.targetScore = Math.floor(Math.random() * 100) + 1;
    crystals.yourScore = 0;
    crystals.crystal1 = 0;
    crystals.crystal2 = 0;
    crystals.crystal3 = 0;
    crystals.crystal4 = 0;

    crystals.crystal1 = Math.floor(Math.random() * 12) + 1;
    crystals.crystal2 = Math.floor(Math.random() * 12) + 1;
    crystals.crystal3 = Math.floor(Math.random() * 12) + 1;
    crystals.crystal4 = Math.floor(Math.random() * 12) + 1;

    crystals.scoreUpdate();
  }

};
