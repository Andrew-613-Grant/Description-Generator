//  Description Generator

//Create Randomizer
function randomNum(num) {
    return Math.floor(Math.random() * num)
};

//Object to extract words from
const messageWords = {
    noun : ["tree", "apple", "house", "sky", "face", "bird", "car", "fork", "lasagna", "hair", "foot", "shower", "bed"],
    adjectiveA : ["amazing", "desperate", "joyous", "radiant", "shiny", "supple", "colorful", "smart", "flexible", "firm", "reliable", "vivacious"],
    adjectiveB : ["reluctant", "meh", "lonely", 'special', 'cute', 'perky', 'doubtful', 'questioning', 'mysterious']
};


//Create custom message sentence
const fullMessage = () => {

for(let prop in messageWords){
    let choice = randomNum(messageWords[prop].length);

    return "🎆 Look at that " + (messageWords.noun[choice]) +"! 👌 " + "It is " + (messageWords.adjectiveA[choice]) + " 🤙🏽 and oh so " + (messageWords.adjectiveB[choice]) + ". 🎆"
}
};


console.log(fullMessage())



    

   



