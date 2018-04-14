This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Lets implement a geolocation quiz.
The answer to the question is a city and the user answers a question by clicking on the city on the map. The goal is to get 10 correct answers to the minimum number of questions.

The quiz will be build with React, Redux and Google Maps.

## Setup

```bash
npm install
```

Run the app:
```bash
npm run start
```

Build for production:
```bash
npm run build
```

## Geolocation Quiz

- Show question
- Show map
- Show highscore
- Show current game score
- Add a marker on the clicked city. Keep if correct, otherwise remove

- Store highscore in the Redux store
- Store the current game in the Redux store

- Be able to restart the current quiz
