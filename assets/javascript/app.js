$(document).ready(function () {

    var questions = [
        { q: "Androphobia", a: "Men", f: "Men,Androids,Women,Robots" },
        { q: "Gymnophobia", a: "Nudity", f: "Nudity,the Gym,Working Out,Sex" },
        { q: "Papaphobia", a: "Pope", f: "your Dad,the Pope,Other People's Dad,Your Mom" },
        { q: "Cyberphobia", a: "Computers", f: "Computers,the Internet,Virtual Reality,Cyborgs" },
        { q: "Homophobia", a: "Homosexuals", f: "Lesbians,Bisexuals,Transexuals,Homosexuals" }
    ];
    var choices = questions[0].f.split(",");
    // console.log(choices)

    var time = 10;
    var intervalId;
    var questionIndex = 0;
    var correct = 0;
    var incorrect = 0;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function qaDisplay() {

        // Runs until out of questions
        if (questionIndex <= (questions.length - 1)) {
            var choicesTrack = [];
            var choices = questions[questionIndex].f.split(",");

            $("#reset").hide();
            $("#question").text(questions[questionIndex].q)

            // Iterate however many times
            for (var i = 0; i < choices.length; i++) {
                // Keep creating random numbers until the number is unique
                do {
                    var randomQuestion = Math.floor(Math.random() * choices.length);
                } while (existingQuestions());
                // console.log(randomQuestion)
                $("#choice" + i).text("Fear of " + choices[randomQuestion]);
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
            $("#correct").show().text("Answered Correctly: " + correct + " out of " + questions.length);
            $("#incorrect").show().text("Answered Incorrectly: " + incorrect + " out of " + questions.length);
            $("#reset").show();
            stop();
        }
    }


    // Choices listening for clicks
    $("#choice0").on("click", function () {
        if ($(this).text().endsWith(questions[questionIndex].a)) {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        }
        next();
    });
    $("#choice1").on("click", function () {
        if ($(this).text().endsWith(questions[questionIndex].a)) {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        }
        next();

    });
    $("#choice2").on("click", function () {
        if ($(this).text().endsWith(questions[questionIndex].a)) {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        }
        next();
    });
    $("#choice3").on("click", function () {
        if ($(this).text().endsWith(questions[questionIndex].a)) {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        }
        next();
    });


    $("#reset").on("click", function () {
        questionIndex = 0;
        correct = 0;
        incorrect = 0;
        stop();
        $(".allChoices").show();
        $("#timer").show();
        $("#question").show();
        $("#correct").hide();
        $("#incorrect").hide();
        $("#reset").hide();
        run();
        qaDisplay();
    })

    function next() {
        stop();
        time = 10;
        run();
        questionIndex++;
        qaDisplay();
    }


    // Timer countdown
    function decrement() {

        time--;

        $("#timer").text(time);

        if (time === 0) {
            next();
        }
    }

    // Stops timer
    function stop() {
        clearInterval(intervalId);
    }

    run();
    qaDisplay();



});