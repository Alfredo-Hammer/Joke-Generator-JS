
/**JAVASCRIPT CODE  
 * 
 * Author: Alfredo Hammer
 */

const btnEl = document.getElementById('btn');

//Llamada a la API
function getJoke() {
    const jokeEl = document.getElementById('joke'); 
    jokeEl.innerHTML = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';

    const jokeUrl = 'https://api.chucknorris.io/jokes/random';
    fetch(jokeUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            btnEl.disabled = false;
            btnEl.innerText = 'Get another joke';
            jokeEl.innerHTML = data.value;
        })
        .catch((error) => {
            btnEl.disabled = false;
            btnEl.innerText = 'Get another joke';
            jokeEl.innerHTML = error;
        });
}

//Evento click
btnEl.addEventListener('click', getJoke);

