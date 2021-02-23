

// const jokes = document.querySelector('#jokes')


// const getDadJokes = async () => {
//     try {
//         const headers = { headers: { Accept: 'application/json' } }
//         const response = await axios.get('https://icanhazdadjoke.com/', headers)
//         // console.log("Dad Joke: ", response.data.joke)
//         const newLI = document.createElement('LI')
//         let joke = response.data.joke;
//         newLI.append(joke);
//         jokes.append(newLI);

//     } catch (e) {
//         console.log("Error detected: ", e)
//     }
// }

// const button = document.querySelector('#button')
// button.addEventListener('click', getDadJokes)


const jokes = document.querySelector('#jokes');

const getDadJokes = async () => {
    try {
        const heading = { headers: { Accept: 'application/json' } }
        const response = await axios.get('https://icanhazdadjoke.com/', heading)
        return response.data.joke;
    } catch {
        return "Uh, oh! No jokes available!";
    }
}

const displayNewJoke = async () => {
    const newJoke = await getDadJokes();
    const newLI = document.createElement('LI');
    newLI.append(newJoke);
    jokes.append(newLI);
}

const btn = document.querySelector('#button')
btn.addEventListener('click', displayNewJoke)