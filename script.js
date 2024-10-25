const adviceId = document.querySelector('#main');
const advice = document.querySelector('.advice'); 
const circle = document.querySelector('.circle');


advice.innerHTML = "Loading advice..."

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            adviceId.textContent = data.slip.id;
            advice.textContent = data.slip.advice;
        })
        .catch((error) => {
            console.error('Error fetching advice:', error);
        });
}

window.onload = fetchAdvice;

circle.addEventListener('click', fetchAdvice);
