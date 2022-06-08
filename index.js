// Your code here
function runQuiz() {
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
      question: "A flamingo is pink because of its diet of shrimp",
      answer: true
    },
    {
      question: "A cow's stomach has 3 compartments",
      answer: false
    },
    {
      question: "A koala eats mainly bamboo",
      answer: false
    }
  ];
  var numOfAgrees = 0              // Setting the variable to 0 resets the numOfAgrees to 0 whenever function is run
  for (var i = 0; i < questionsArr.length; i++) {
    var question = questionsArr[i]
    var answer = confirm(question)
    if (answer) {                 // This is shorthand for if (answer === true)
      numOfAgrees++               // Increment the # of agrees
    }
  }

}

// Calculate score
function scoreTest() {
  var score = Math.floor(answer/question) * 100;
  alert("You scored a " + score)
}

/* From lecture:
  if (numOfAgrees >= Math.round(questions.length / 2)) {
    alert("You're an animal wiz!")
  } else {
    alert("Hm, you should watch more National Geographic.")
  }
*/
