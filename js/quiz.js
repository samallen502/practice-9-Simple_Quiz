/* We will start by setting up a Two-Dimensional Array featuring Questions & Answers. */

var questions = [
    ['What number President is Donald J. Trump?', 45],
    ['In what year did UofL win its third national championship?', 2013],
    ['In what year was UofL established?', 1798],
] /* Answers are all numbers intentionally to keep things simple. */

/*
Another way you could write the above object...

var questions = [
    {
        question: 'What number President is Donald J. Trump?'
        answer: 45
    },
    {
        question: 'In what year did UofL win its third national championship?'
        answer: 2013
    },
    {
        question: 'In what year was UofL established?'
        answer: 1798
    },
];

Just keep in mind that if you made these changes, you'd also need to simplify some lines below:

CHANGE question = questions[i][0]
TO question = questions[i].question

&

CHANGE answer = questions[i][1]
TO answer = questions[i].answer

(Whether you do this boils down to a style pref. Both work the same.)
*/


var correctAnswers = 0; /* This is to track the # of correct answers */
var question; /* Now, we're just calling all variables, all in one place, which is best practice... */
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
    /* document.write(message); <-- Commenting this out. While it would be useful to use the print function in place of "document.write" if "document.write" appeared 20x in our code, it doesn't ... plus, per Treehouse no serious Web Devs even use document.write anymore ... it's so 1990s. ;-) */
    var outputDiv = document.getElementById('output'); /* Much better than "document.write" because getElementById locates a <div>, because <div> has an id of 'output', within index.html ... and we are storing all of this in a variable names outputDiv */
    outputDiv.innerHTML = message; /* The "innerHTML" allows the author to, from JavaScript, change what's shown inside the <div> on index.html */
}

function buildList(array) { /* Instead of array, you could also use arr, short for array. Meh. */
    var listHTML = '<ol>'; /* You see HTML here because we are trying to build up a list that will eventually print to the screen for endgame results. */
        for (var i = 0; i < array.length; i +=1) {
            listHTML += '<li>' + array[i] + '</li>';
        }
    listHTML += '</ol>';
    return listHTML;
} /* This whole block of code is just a string. However, near the bottom this function will be called and it will display valuable endgame results by adding what this function does to the HTML. */

/* For the next section, note QUESTION versus QUESTIONS. Big difference between the two as one is an array, whereas one is a two-dimensional array! So, one S could make or break your whole code! */

for (var i = 0; i < questions.length; i +=1) {
    question = questions[i][0]; /* WTM: First Q asks about Trump. */
    answer = questions[i][1]; /* WTM: First A is 45. */
    response = prompt(question);
    response = parseInt(response); /* WTM: By default, whatever gets typed into a browser's prompt will be a STRING. We need to convert the STRING to a NUMBER. parseInt(response) will take what the user types into the prompt, convert it to a NUMBER, and store that in the RESPONSE variable. */
    /* TIP: You could cut the two lines above and replace with this single line: "response = parseInt(prompt(question))" ... remember that in programming, the innermost set of parentheses gets run first ... so, first we pass a string, "(question)", to the prompt method, to return a string value ... that is passed to the parseInt method, which converts the string into a number. */
    if (response === answer) { /* This line and the next line simply boost the correctAnswers tally by 1 when the user answers correctly. We are going to keep track of more than that, though, which is why you see else ... */
        correctAnswers += 1;
        correct.push(question); /* This corresponds to the variable correct and creates an array of correct answers. */      
    } else {
        wrong.push((question)); /* This corresponds to the variable wrong and creates an array of all the incorrect answers. */
    }
}

html = "You answered " + correctAnswers + " questions(s) correctly!"; /* This just prints the final score to the screen. */
html += '<h2>You answered these specific questions correctly:</h2>';
html += buildList(correct); /* Here's where we use our buildList function. */
html += '<h2>You answered these questions incorrectly:</h2>'
html += buildList(wrong);
print(html);