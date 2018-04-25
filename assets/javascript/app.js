$( document ).ready(function() {

var questions = [
    { q: "One plus two", a: "Three", f: "Four,Five,Six,Three" },
    { q: "Five plus three", a: "Eight", f: "Seven,Nine,Ten,Eight" },
    { q: "Two minus one", a: "One", f: "Zero,Two,Three,One" },
    { q: "Nine minus seven", a: "Two", f: "Four,Five,Six,Two" },
    { q: "Six times three", a: "666", f: "Eighteen,Fifteen,Nine,666" }
];
var choices = questions[0].f.split(",");
console.log(choices)

var time = 10;
var intervalId;
var questionIndex = 0;
var score = 0;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function qaDisplay() {

    // Runs until out of questions
    if (questionIndex <= (questions.length - 1)) {
        var choicesTrack = [];
        var choices = questions[questionIndex].f.split(",");

        $("#question").text(questions[questionIndex].q)

        // Iterate however many times
        for (var i = 0; i < choices.length; i++) {
            // Keep creating random numbers until the number is unique
            do {
                var randomQuestion = Math.floor(Math.random() * choices.length);
            } while (existingQuestions());
            console.log(randomQuestion)
            $("#choice" + i).text(choices[randomQuestion]);
            // Add the choice to the tracker
            choicesTrack.push(randomQuestion);
        }

        // If the current random number already exists in the tracker, return true
        function existingQuestions() {
            for (var i = 0; i < choicesTrack.length; i++) {
                if (choicesTrack[i] === randomQuestion) {
                    return true;
                }
            }
            return false;
        }
    }
    // If there aren't, render the end game screen.
    else {
        $(".allChoices").hide();
        $("#timer").hide();
        $("#question").text("Game Over!");
        $("#score").text("Final Score: " + score + " out of " + questions.length);
        stop();
    }
}

// Timer countdown
function decrement() {

    time--;

    $("#timer").text(time);

    if (time === 0) {
        stop();
        time = 10;
        run();
        questionIndex++;
        qaDisplay();
    }
}

// Stops timer
function stop() {
    clearInterval(intervalId);
}

run();
qaDisplay();



});