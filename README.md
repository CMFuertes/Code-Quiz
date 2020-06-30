# 04 Web APIs: Code Quiz

The assignment was to make a code quiz that adhered to the following criteria. 

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## User Story
Files created intially include, index.html, and highscores.html. In order to create a page for the quiz itself as well as a storage location to present high scrore names. Afterwards Assets folder was created in order to hold folders, css, js, and images. Whereas files script.js, highscores.js can be used to animate the quiz and highcores table. As well as style.css was made in order to edit the style of the pages. In the image folder a background image was added for the project pages. 

Code was made in order for the quiz to begin when the start button is clicked. Upon starting, a timer begins, giving the user 100 seconds(10 seconds per question). Should the user guess incorrectly, 15 seconds are deducted from the time. User moves on whether questions are right or wrong. They will be stopped and presented with a score of 0 if they run out of time. 

When the game is over, users are promted to enter their names into the hall of fame. Users also have the option to clear out the high scores table if they wish to reset the board. From the "Hall of Fame" users can return to the main page and begin the quiz again. 