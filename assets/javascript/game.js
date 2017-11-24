$(document).ready(function () {

    var question = {

        "question1": {
            "question": "If there are 6 apples and you take away 4, how many do you have?",
            "answers": {
                "answer1": "Six",
                "answer2": "Four",
                "answer3": "Two",
                "answer4": "None",
            },
            "correctAnswer": "Four",
            "explanation": "The 4 you took"
        },

        "question2": {
            "question": "If there are 12 fish and half of them drown, how many are there?",
            "answers": {
                "answer1": "Twelve",
                "answer2": "Six",
                "answer3": "None",
                "answer4": "What?",
            },
            "correctAnswer": "Twelve",
            "explanation": "Fish don’t drown!"
        },

        "question3": {
            "question": "How many sides does a circle have?",
            "answers": {
                "answer1": "One",
                "answer2": "Two",
                "answer3": "Four",
                "answer4": "Circle… Sides?",
            },
            "correctAnswer": "Two",
            "explanation": "An inside and an outside."
        },

        "question4": {
            "question": "What does 2+2×2 equal?",
            "answers": {
                "answer1": "Eight",
                "answer2": "Six",
                "answer3": "Four",
                "answer4": "Can you stop it?",
            },
            "correctAnswer": "Six",
            "explanation": "Multiply before addition. 2×2=4, 4+2=6"
        },

        "question5": {
            "question": "What will give you a higher result, addition or multiplication of all numbers?",
            "answers": {
                "answer1": "Equal",
                "answer2": "Addition",
                "answer3": "Multiplication",
                "answer4": "Give me a break!",
            },
            "correctAnswer": "Addition",
            "explanation": "Multiplication equals 0, because multiplying by zero always gives zero"
        },

        "question6": {
            "question": "Which one is heavier one ton of iron or one ton of cotton?",
            "answers": {
                "answer1": "Iron of course!",
                "answer2": "Cotton",
                "answer3": "Equal",
                "answer4": "What's a ton?",
            },
            "correctAnswer": "Addition",
            "explanation": "Multiplication equals 0, because multiplying by zero always gives zero"
        },
    }

    $("#rulesBttn").on("click", function () {
        $(".main-page").css("display", "none");
        $(".rules-page").css("display", "block");
    })
    $("#startBttn").on("click", function () {
        $(".rules-page").css("display", "none");
        $(".questions").css("display", "block");
    })
});