console.log("dsfdsf");

const weatherForm = document.querySelector('form');
console.log(weatherForm);
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("submitted");
})

