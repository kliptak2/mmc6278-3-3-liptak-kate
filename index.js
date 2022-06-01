// Your code here
function runQuiz () {
  var questionsArr = [
    {
      question: "A manatee is also known as a sea cow",
      answer: true
    },
    {
      question: "A rhino's horn is made of hair",
      answer: true
    },
    {
      question: "A flamingo is pink because it eats shrimp",
      answer: true
    },
    {
      question: "A cow's stomach has 3 compartments",
      answer: false
    },
    {
      question: "A koala eats mainly bamboo",
      answer: false
    },
];

var numOfAgrees = 0
  for (var i = 0; i < questionsArr.length; i++) {
    var question = questions[i]
    var answer = confirm(question)
    if (answer) {                   // This is shorthand for if (answer === true)
      numOfAgrees++
    } 
  }
  if (numOfAgrees >= Math.floor(questions.length / 2)) {
    alert("You're an animal wiz!")
  } else {
    alert("Hm, you should watch more National Geographic.")
  }
}

/* To Do
1 - "before each" hook for "Should have start quiz button"
2 - Define runQuiz
3 - Use math.floor to round up score
4 - Use "for" statment to loop over the array
5 - if (numOfAgrees >= 3) {
*/