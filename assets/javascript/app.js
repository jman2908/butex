
var card = $("#main");
var questions = [
    {
        question: "What is the name of Will Smith's character in Independence Day?",
        answers:["John Smith", "Captain Morgan", "Captain America", "Captain Steven Hiller"],
        correctAnswer: "Captain Steven Hiller"
    },
    {
        question: "What year was Forrest Gump released?",
        answers: [ "1997", "1994", "2001", "1999"],
        correctAnswer: "1994"
    },
    {
        question: "Which Coen Brothers cult classic film features the principal character hanging out at a bowling alley all the time, but the character never actually bowls?",
        answers: ["Jurassic Park", "Pulp Fiction", "The Big Lebowski", "Ant-Man"],
        correctAnswer: "The Big Lebowski"
    },
    {
        question: "Who is the youngest best actor Oscar winner?",
        answers: ["Casey Affleck", "Adrien Brody", "Rami Malek", "Matthew McConaughey"],
        correctAnswer: "Adrien Brody"
    },
    {
        question: "Bruce Willis played a time traveler in what 1995 movie?",
        answers: ["Time Cop", "Back to the Future", "12 Monkeys", "Looper"],
        correctAnswer: "12 Monkeys"
    },
    {
        question: "Carlos Estevez is better known as whom?",
        answers: ["Emilio Estevez", "Charlie Sheen", "Martin Sheen", "Corey Haim"],
        correctAnswer: "Charlie Sheen"
    },
];

var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    
    if (game.counter === 0) {
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-container").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#begin").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    
    for (var i = 0; i < inputs.length; i++) {
      
        if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } 
        else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    card.html("<h2>Done</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#begin", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
