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
'knock , , knock . who there ? cheese ! cheese who . cheese ! ',
'? knock . make - knock who ? dozen . dozen who ? million anymore anybody tell ? ',
'knock , <unk> there ? cheese ! suspense . fun ! i m a really tired to ! ',
'tell my knock - knock joke . who \'s there ! ari ! ari who <unk> you should open the door ! . who \'s ? ',
'please , knock . who \'s there ! cain ! cameron <unk> ? cain you tell ! will you remember in a year but i still think you re even cuter ! ',
', knock who \'s there ? cheese cheese . cheese who ? for cheese a jolly good dozen for knock and knock . who \'s there ! blood <unk> ! ! ',
'who \'s there ! cain <unk> will who and will you let me in ? ',
'knock , knock ; who \'s there ! barbara ! barbara who ? barbara black black sheep ! have you any wool ! ',
'knock , knock - knock who \'s it ? cheese ! cheese that ? i hate to make a really knock - knock joke - it \'s like i m a . ',
'i knock , knock . that \'s there ! ! ! b you ! ',
'knock , , knock . \'s that ? ! ',
'knock , knock who \'s there ? cheese cheese who ? cheese the cheese ! i \'m a really mad to get in you a million ! ',
'knock ! knock . who goes there ? les . les who ? anna you like this next joke ! ',
'let \'s knock . who \'s there ! barbara ',
'who ? les tell a more knock - knock joke ! ! ',
'knock - knock joke ! knock , knock - who \'s there ! ari ! ari who ; ari - s - p - e - c , i m tired for you when i come ? . ',
'let \'s knock ; who \'s there ! barbara ! barbara who of barbara - mary - mary ! ,'
'<unk> . who ’s there . watson ? scott who ? watson the radio and you wo n’t even knock ! and who ’s there ',
'knock , knock . ! who ’s there ? i m a . i adore who ? adore is between us . open up !', 
'knock , knock who ? dozen who ? dozen all this knocking bother to do are already !.' ,
'knock - knock . ? who ? knock , knock . who \'s there from ! ! ',
'knock . who \'s there ! buddha ! buddha who ? buddha these knock - knock jokes !', 
'knock , knock . who \'s there there ? cheese cheese who ! cheese a nice girl ?', 
'knock , knock . who \'s there who ? ben hur who ? ben hur for two years ? ',
'knock , knock . who goes there ? adore ? adore who ? adore is between us in a week ? yes !', 
'knock , who \'s there ! barbara ! barbara <unk> ? barbara black sheep , be afraid ! ',
'do i have any questions ? ',
'knock , tell . who there ? leaf or leaf ? ?', 
'watson who ? watson is not the name ! ',
'knock . who \'s there ! barbara ! alfred who ! bette of h !', 
'you are ? ',
'please , knock ? ? who \'s there . jamaica bethany who ? jamaica mistake ? just open the door !', 
'knock , knock , \'s there ? cheese cheese who ! cheese a nice girl . ',
'go knock . knock ; \'s there ? cheese cheese who ? cheese some cheese for you . ',
'knock , knock . who \'s there ! cain ! cain who ? cameron you hear !', 
'tell my knock - knock joke ! ',
'knock , tell there ? cheese ! cheese who ? blood brothers ! ',
'knock , knock and who \'s there who ? cheese who ! cheese a cute girl ! <unk> you glad you use knocking this door .', 
'do you have an open <unk> <unk> ? knock knock ? ',
'knock . , knock . who \'s she ’s there ? annie . annie annie who ? annie you for being my friend !', 
'girl ! there is cheese ! ',
'who \'s you there ! cain ! cain who ? cain you tell !', 
'give this two - knock - double - q ! ',
'knock , knock ? who is there ! ari ! ari who ? czech you give me if i stop knocking and tell me the whole ! ! ! ',
'knock , knock . and ’s there ? les or les who ? les knock you out ! in , knock - knock . . who ’s there ? i hate your own word with you' , 
'knock , knock . who goes there ? ',
'knock , knock . who ’s there there ? les . open the door who ? les tell some other have - knock jokes and knock . who ? hey ho , wow . you sure would like you to open your door' 
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