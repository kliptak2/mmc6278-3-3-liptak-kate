// Your code here

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
]
function runQuiz()
{
  let numOfAgrees = 0
  for (let i = 0; i < questionsArr.length; i++)     // "i" stands for "initialization". Starts the counter at 0.
  {
    let userAnswer = confirm(questionsArr[i].question)
    if(userAnswer === questionsArr[i].answer)
    {
      numOfAgrees++
    }
  }
  let answer = (numOfAgrees/questionsArr.length) * 100
  alert("You scored a " + Math.round(answer) + "%")     // Put Math.round when you display the answer v.s. the actual answer. You could attach it to "let answer = " but this would round the actual answer, which is less flexible.

}




/* Alt answer w/o numOfAgrees
var  questionsArr = [
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
]
function runQuiz()
{
  let correct = 0
  let incorrect = 0

  for (let i = 0; i < questionsArr.length; i++)
    {
     let answerFromUI = confirm(questionsArr[i].question)

     if(answerFromUI == questionsArr[i].answer)
     {
      correct ++
     }
     else
     {
         incorrect ++
     }
 };

 let answerPercentage = 0.00

 answerPercentage = correct / (incorrect + correct) * 100
 alert("Congratulations, you got a " + Math.round(answerPercentage).toString() + '%')
}
*/


/* Alt alt answer using forEach loop
var  questionsArr = [
    {
      question: 'Is the color blue red?',
      answer: false
    },
    {
      question: 'Can leaves be green?',
      answer: true
    },
    {
      question: 'Are puppies cute?',
      answer: true
    },
    {
      question: 'Could you find your way to the post office without your phone?',
      answer: false
    },
    {
      question: 'Is there a color that sucks more than pink?',
      answer: true
    },
    {
      question: 'sss there a color that sucks more than pink?',
      answer: true
    }
]
function runQuiz()
{
    let correct = 0
    let incorrect = 0

    questionsArr.forEach(question => {
       let answerFromUI = confirm(question.question)

       if(answerFromUI == question.answer)
       {
        correct ++
       }
       else
       {
           incorrect ++
       }
   });

   let answerPercentage = 0.00

   answerPercentage = correct / (incorrect + correct) * 100
   alert("Congratulations you got a " + Math.round(answerPercentage).toString() + '%')
}
*/

