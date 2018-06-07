const button = document.querySelector('#button')
const joke = document.querySelector('#joke')

const jokes = [
    'who \'s there ! argo ! argo who ? argo down the shops !',
    'who \'s there ! teresa ! teresa who ? teresa are green !',
    'who \'s there ! argo ! argo who ? argo down the shops ! ',
    'who \'s there ! carrie ! carrie who ? carrie on camping ! ',
    'who \'s there ! <unk> ! - who ? hey hey who ? hey ho , hey ho ... '
]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomJoke() {
     let i = getRandomInt(jokes.length)
     joke.innerHTML = jokes[i]
}


button.addEventListener('click', randomJoke)