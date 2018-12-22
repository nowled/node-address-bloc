const inquirer = require("inquirer");
const questions = [
  {
    type: "list",
    name: "status",
    message: "What Will You Be Doing This Time Next Year?: ",
    choices: [
      "Working As A Developer",
      "Working As A Writer",
      "Spending Time With Family",
      "Both"
    ]
  }
];

 inquirer.prompt(questions).then(answers => {
    switch (answers.status) {
      case "Working As A Developer":
        console.log("You Already Are!");
        break;
      case "Working As A Writer":
        console.log("You Already Are!");
        break;
      case "Spending Time With Family":
        console.log("On Your Way!");
        break;
      case "Both":
        console.log("Life Is Good");
        break;
      default:
        console.log("We Will Get This Sooner Or Later");
    }
  })
  .catch(err => {
    console.log(err);
  });
