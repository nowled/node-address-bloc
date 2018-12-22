const inquirer = require('inquirer');

//create a questions array with objects
// type: list, name: status, message: What nigger
// choices = array with answers
//close off the array, then object, the finally array;
//create a switch statement

const questions = [
 {

    type: "list",
    name: "status",
    message: "What Are You Going To Do?",
    choices: [
        "I Will Get In Shape",
        "I Am Going To Figure Out How To Get This Money",
        "Work On Development Work"
    ]
 }
];

  inquirer.prompt(questions).then(answers=>{
       switch(answers.status){
         case   "I Will Get In Shape":
         console.log("I will be Strong And Healthy");
         break;
         case "I Am Going To Figure Out How To Get This Money":
         console.log("You Will Reach That Goal");
         break;
         case   "Work On Development Work":
         console.log("You Will Pass The BootCamp Interview Or Start A Business");
         break;
         default:
         console.log("So What A Mistake Was Made Keep Trying");
         break;

       }
  })

  .catch(err=>{
    console.log(err);
  })
