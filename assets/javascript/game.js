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
    $("#target").text(this.targetScore);
    $("#score").text(this.yourScore);
    $("#winDisplay").text(this.wins);
    $("#lossDisplay").text(this.losses);

    console.log("Target Score: " + this.targetScore);
    console.log("Crystals: " + this.crystal1);
    console.log("Crystals: " + this.crystal2);
    console.log("Crystals: " + this.crystal3);
    console.log("Crystals: " + this.crystal4);
  },

  winCheck: function() {

    if(crystals.yourScore === crystals.targetScore) {
      this.wins++
      $("#winDisplay").text(crystals.wins);
      crystals.reset();
    }
    else if (crystals.yourScore > crystals.targetScore) {
      this.losses++;
      $("#lossDisplay").text(crystals.losses);
      crystals.reset();
    }
  },

  reset: function() {
    this.targetScore = Math.floor(Math.random() * 120) + 19;
    this.yourScore = 0;
    this.crystal1 = 0;
    this.crystal2 = 0;
    this.crystal3 = 0;
    this.crystal4 = 0;

    this.crystal1 = Math.floor(Math.random() * 12) + 1;
    this.crystal2 = Math.floor(Math.random() * 12) + 1;
    this.crystal3 = Math.floor(Math.random() * 12) + 1;
    this.crystal4 = Math.floor(Math.random() * 12) + 1;

    crystals.scoreUpdate();
  }

};
