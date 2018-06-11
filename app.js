const button = document.querySelector('#button')
const joke = document.querySelector('#joke')

const jokes = [
'who\'s there ! aaron ! aaron who ! aaron the cake for you !',   
'who\'s there ! abby ! abby who ? abby birthday to you , eve !',     
'who\'s there ! carrie ! carrie who ? carrie on camping !',   
'who\'s there ! leaf ! leaf who ? leaf me alone !',    
'who\'s there ! ben ! ben who ? ben knocking on this door all morning !  ',        
'who\'s there ! chad ! chad is ? chad your jokes ! ',     
'who\'s there ! aaron ! aaron who ! aaron the bill !  ',  
'who\'s there ! ben ! ben who ? ben knocking on this door all morning ! ',    
'who\'s there ! alvin ! alvin who ! alvin your dinner ! ',   
'who\'s there ! anita ! anita who ? anita you like i need a hole in the head ! ',   
'who\'s there ! carrie ! carrie who ? carrie on camping ! ',      
'who\'s there ! aaron ! aaron who ! aaron the forest !',   
'who\'s there ! ben and anna who ? ben and anna split !', 
'who\'s there ! ben and i and ben who ? ben away for a while but i don’t feel very welcome right now !', 
'who\'s there ! gladys ! gladys who ? gladys friday , finally the weekend starts !', 
'who\'s there ! aaron ! aaron who ! aaron the wall', 
'who\'s there ! aaron ! aaron who ! aaron the floor ! ', 
'who\'s there ! carrie ! carrie who ? carrie me home , i m tired ! ', 
'who\'s there ! aaron ! aaron who ? bruno for my birthday !', 
'who\'s there ! aaron ! aaron who ? ben - phone phone ', 
'who\'s there ! dishes ! dishes who ? dishes the police come out and play with me !', 
'who\'s there ! anita ! anita who ? anita you like i need a new one !', 
'who\'s there ! les ! les who ? les tell some more knock - knock jokes !', 
'who\'s there ! anita ! anita who ? anita - cheese !', 
'who\'s there ! annie ! annie who ? annie - the door !', 
'who\'s there ! annie ! annie who ? annie - e - o - o !', 
'who\'s there ! leaf ! canoe who ? canoe', 
'who\'s there ! <unk> ! . ! ! <unk> who ? do you know who you are ?', 
'who\'s there ! les ! les who ? arizona the house !', 
'who\'s there ! dishes ! dishes who ? buddha the door !', 
'who\'s there ! sherwood ! sherwood who ? sherwood the door !',  
'who\'s there ! dishes ! dishes who ? leaf me in the head !', 
'who\'s there ! carrie ! carrie who ? carrie me in !', 
'who\'s there ! les ! les who ? les the moon ! ', 
'who\'s there ! les ! les who ? les the window !', 
'who\'s there ! ben ! ben who ? ben you ! ', 
'who\'s there ! not ! canoe who ? les you do nt know !', 
]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomJoke() {
    joke.innerHTML = '<div class="loader"></div>'
    setTimeout(function(){ 
        let i = getRandomInt(jokes.length)
        joke.innerHTML = jokes[i]
    }, 2000);
    
}


button.addEventListener('click', randomJoke)