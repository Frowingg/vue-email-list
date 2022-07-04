let array = [];
function getRandomMail() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(response) {
        let randomMail = response.data.response;
        return randomMail;
    })
};

while (array.length < 10) {
    array.push(getRandomMail());
};
console.log(array)
console.log(array.length)
