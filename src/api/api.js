
const BASE_URL = "http://localhost:3001/score";

export const getHighScore = () => fetch(BASE_URL)
.then(res => res.json())
.catch(console.error("ERROR WHEN FETCHING SCORE"));

export const setHighScore = user => fetch(BASE_URL, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
    },
    body: JSON.stringify(user)
})
.then(res => res.json())
.catch(console.error("ERROR WHEN FETCHING SCORE"));