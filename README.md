# Project Overview

![] (pop culture)

In this project, I create a game called "Trivia", and the questions are based on pop culture. To start the game, the player can click the start button on the main page. Once the button is clicked, the first question will pop up, and there are four option for you to choose. Once you picked an answer, the page will take you to the next questions and so on. Once you finished all the 10 questions, your score will be displayed, and there is a restart button for you to replay the game.

## Development

I build this game by using the HTML, CSS, and JavaScript to keep the game function. What I did is to creat the HTML skeleton of the game and use CSS for the styling. After both the HTML and CSS were created, I use JavaScript to make the game run properly. The orders for making the project are following:

- Used HTML and to set up the main page and the questions and answers.
- Adding CSS to keep the main page and the questions organized.
- Using the CSS to create container for the answers.
- Download images from Google to add on the top of the questions.
- Writing the JavaScript to seperate the main pages and the questions.
- Adding score for the player to know their scores.
- Run the game to see if it works.

## Challenge

The most challenge thing I have faced while building this project is I have issue to minimize the containers for the answers. It always look stretch no matter what I do. How I resolved the issue is to add the width and set it to 100vh. After that the answer containers will be on the center.

```CSS

.Answer {
display: grid;
grid-template: repeat(2, 1fr) / repeat(2, 1fr);
font: 15px;
width: 100vh;
margin: 0 auto;
}
```

## Built With

- HTML
- CSS
- JavaScript
