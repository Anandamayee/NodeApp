const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
console.log(weatherForm);
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = search.value;
    location.href=`http://localhost:3000/weather?address=${address}`;
    // fetch(`http://localhost:3000/weather?address=${address}`).then(response => {
    //     response.json().then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         }
    //         else {
    //             console.log(data);
    //             location.href='./weather'
    //         }
    //     })
    // })
})

