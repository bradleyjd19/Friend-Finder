// const express = require("express");
// const path = require("path");

// const PORT = process.env.PORT || 8080;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


const questions = [
  {
    number: 1,
    question: "I prefer to be in social settings with larger groups."
  },
  {
    number: 2,
    question: "I prefer the theater over watching movies at home."
  },
  {
    number: 3,
    question: "It's healthy for couples to have separate activities."
  },
  {
    number: 4,
    question: "Love at first sight is a real thing."
  },
  {
    number: 5,
    question: "Valentine's Day has to be celebrated on February 14th."
  },
  {
    number: 6,
    question: "I prefer a drink at home over going to the bars."
  },
  {
    number: 7,
    question: "I would rather live in a condo in the city than a house in the suburbs."
  },
  {
    number: 8,
    question: "I would rather read the book than see the movie."
  },
  {
    number: 9,
    question: "I am more a dog person than a cat person."
  },
  {
    number: 10,
    question: "I prefer the beach over the mountains."
  },
];

function displayQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let questNum = $("<h3>");
    let questText = $("<h5>");
    let questBlock = $("<div>");
    let optionEmpty = $("<option>")
    let option1 = $("<option>");
    let option2 = $("<option>");
    let option3 = $("<option>");
    let option4 = $("<option>");
    let option5 = $("<option>");
    let select = $("<select>");
    questNum
      .addClass("mt-5")
      .text("Question " + questions[i].number)
    questText
      .text(questions[i].question);
    optionEmpty
      .text("");
    option1
      .text("1 (strongly disagree)")
    option2
      .text("2")
    option3
      .text("3")
    option4
      .text("4")
    option5
      .text("5 (strongly agree)")
    select
      .addClass("chosen-select")
      .attr("data-placeholder", "Select a Number")
      .attr("id", "q" + questions[i].number)
      .append(optionEmpty)
      .append(option1)
      .append(option2)
      .append(option3)
      .append(option4)
      .append(option5);
    questBlock
      .append(questNum)
      .append(questText)
      .append(select);
    $("#questView").append(questBlock);
  }
};

displayQuestion();

// take the input from the "About You" form and store it
// take the values from the questions and store as an array

// app.get("/api/friends", function (req, res) {
//   res.sendFile(path.join(__dirname, "./"))
// })