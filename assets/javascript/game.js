$(document).ready(function() {

    //...............................................
    //
    // ...vars for questions, answers and explanation 
    //
    //...............................................

    var q1 = {
        "question": "If there are 6 apples and you take away 4, how many do you have?",
        "answer1": "Six",
        "answer2": "Four",
        "answer3": "Two",
        "answer4": "None",
        "correctAnswer": "Four",
        "explanation": "The 4 you took",
    };

    var q2 = {
        "question": "If there are 12 fish and half of them drown, how many are there?",
        "answer1": "Twelve",
        "answer2": "Six",
        "answer3": "None",
        "answer4": "What?",
        "correctAnswer": "Twelve",
        "explanation": "Fish do not drown!",
    };

    var q3 = {
        "question": "How many sides does a circle have?",
        "answer1": "One",
        "answer2": "Two",
        "answer3": "Four",
        "answer4": "Circle, Sides?",
        "correctAnswer": "Two",
        "explanation": "An inside and an outside.",
    };

    var q4 = {
        "question": "What does 2+2x2 equal?",
        "answer1": "Eight",
        "answer2": "Six",
        "answer3": "Four",
        "answer4": "Can you stop it?",
        "correctAnswer": "Six",
        "explanation": "Multiply before addition. 2x2=4, 4+2=6",
    };

    var q5 = {
        "question": "What will give you a higher result, addition or multiplication of all numbers?",
        "answer1": "Equal",
        "answer2": "Addition",
        "answer3": "Multiplication",
        "answer4": "Give me a break!",
        "correctAnswer": "Addition",
        "explanation": "Multiplication equals 0, because multiplying by zero always gives zero",
    };

    var q6 = {
        "question": "Which one is heavier one ton of iron or one ton of cotton?",
        "answer1": "Iron of course!",
        "answer2": "Cotton",
        "answer3": "Equal",
        "answer4": "What is a ton?",
        "correctAnswer": "Equal",
        "explanation": "Ton = ton, even if you weight iron and catton.",
    };

    var q7 = {
        "question": "How much dirt is there in a hole that measures two feet by three feet by four feet?",
        "answer1": "Full hole of dirt",
        "answer2": "24 cubic feet",
        "answer3": "None",
        "answer4": "It is a huge hole!",
        "correctAnswer": "None",
        "explanation": "There is no dirt in a hole, or it would not be hole",
    };

    var q8 = {
        "question": "A monkey, a squirrel, and a bird are racing to the top of a coconut tree. Who will get the banana first, the monkey, the squirrel, or the bird?",
        "answer1": "Monkey",
        "answer2": "Squirrel",
        "answer3": "Bird",
        "answer4": "No one",
        "correctAnswer": "No one",
        "explanation": "Because you can not get a banana from a coconut tree!",
    };

    var q9 = {
        "question": "How many times can you take 5 from 25?",
        "answer1": "One",
        "answer2": "Five",
        "answer3": "Answer not listed",
        "answer4": "Let me out of here!",
        "correctAnswer": "One",
        "explanation": "Because the next time you go to subtract 5, the number becomes 20.",
    };

    var q10 = {
        "question": "A little girl kicks a soccer ball. It goes 10 feet and comes back to her. How is this possible?",
        "answer1": "She watched too much Harry Portter",
        "answer2": "She kicks the ball straight up in the air",
        "answer3": "She kicked it into the wall",
        "answer4": "My mind is blown!",
        "correctAnswer": "She kicks the ball straight up in the air",
        "explanation": "It goes up and then down.",
    };

    //...............................................
    //
    // ...vars for game stats
    //
    //...............................................

    var qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    var intervalId;
    var gameTimer = 20;
    var currentQ = 0;
    var questionABC = qArray[currentQ];
    var right = 0;

    //...............................................
    //
    // ...Main page, when rules button pressed, it's going to hide main page, and unhide rules page
    //
    //...............................................
    
    $("#rulesBttn").on("click", function () {
        $(".main-page").css("display", "none"); //  ...main page hides
        $(".rules-page").css("display", "block"); //  ...rules page shows
    });
    
    //...............................................
    //
    // ...Rules page, when start button pressed, it's going to hide rules page, and unhide question page
    //
    //...............................................
    
    $("#startBttn").on("click", function () {
        insertQuestions();
        $(".rules-page").css("display", "none"); //  ...rules page
        $(".questions").css("display", "block"); //  ...question page
    });

    //...............................................
    //
    //  ...Function for timer 
    //
    //...............................................

    function gmTimer() {
        var gameTimer = 20;
        $("#gameTimer").html("<h1>" + gameTimer + "</h1>");
        intervalId = setInterval(decrement, 1000);
    };

    //...............................................
    //
    //  ...The decrement function.
    //
    //...............................................
    
    function decrement() {

        gameTimer--; //  ...Decrease number by one.

        $("#gameTimer").html("<h2>" + gameTimer + "</h2>"); //  ...Show the number in the #show-number tag.

        if (gameTimer === 0) {  //  ...Once number hits zero...

            stop();//  ...run the stop function.
            
            $(".questions").css("display", "none");
            $(".result").css("display", "block");
            $("#correctOrWrong").text("Your time is up.")  //  ...hide question page, display result page, and let player know that thir time is up
        };
    };

    //...............................................
    //
    //  ...Clear intervalID. (stop timer)
    //
    //...............................................

    function stop() {

        clearInterval(intervalId);
        gameTimer = 20;

    };

    //...............................................
    //
    //  ...Function to insert question and answers in to a question page.
    //
    //...............................................

    function insertQuestions(selectQuestion) {

        gmTimer(); // ...starts timer when question inserted

        $.each(qArray[currentQ], function (key, value) { // ...displays question is HTML
            $("#" + key).attr("data-name", value);
            $("#" + key).html("<h1>" + value + "</h1>");
        });

        var correctA = (qArray[currentQ].correctAnswer);
        console.log(correctA);                           // ...console log right question and var to store right question.

        $(document).on("click", ".a", function () {      // ...When answer button clicked, does following.
            stop()
            var pressedA = $(this).attr("data-name")     // ...stores data stored in a answer button
            
            if (currentQ <= 8) {                         // ...if not all questions have been asked continue asking questions
                $(".questions").css("display", "none");
                $(".result").css("display", "block");
                
                if (pressedA === correctA) {             // ...if correct answer equal to the answer player pressed does following
                    right++;
                    $("#yesORno").attr("src", "assets/media/correct.gif")
                    $("#correctOrWrong").text("Correct!")
                } else {                                 // ...if correct answer don't equal to the answer player pressed does following
                    $("#yesORno").attr("src", "assets/media/wrong.gif")
                    $("#correctOrWrong").text("Wrong =(")
                };
            } else {  
                $(".questions").css("display", "none");
                $(".result").css("display", "block");
                $("#nextQ").hide()
                
                if (pressedA === correctA) {             // ...if correct answer equal to the answer player pressed does following
                    right++;
                    $("#yesORno").attr("src", "assets/media/correct.gif")
                    $("#correctOrWrong").text("Correct!")
                } else {                                 // ...if correct answer don't equal to the answer player pressed does following
                    $("#yesORno").attr("src", "assets/media/wrong.gif")
                    $("#correctOrWrong").text("Wrong =(")
                };                                  // ...when all the questions have been asked, show final resul page
                $(".questions").css("display", "none");
                $(".finalResults").css("display", "block");
                $("#correctA").text("You answered "+right+" out of 10 questions correctly. Good Job.")
            }
        });
    };

    //...............................................
    //
    //  ...When next button pressed, load next question.
    //
    //...............................................

    $(document).on("click", "#nextQ", function () {
        currentQ++;
        $(".result").css("display", "none");
        $(".questions").css("display", "block");
        insertQuestions();
    });

    //...............................................
    //
    //  ...When reset button pressed, resets game.
    //
    //...............................................

    $("#reset").on("click", function(){
        currentQ = 0;
        right = 0;
        $(".rules-page").css("display", "block");
        $(".questions").css("display", "none");
        $(".result").css("display", "none");
        $(".finalResults").css("display", "none");
        $("#nextQ").show()
        console.log(right)
    })
});