// Day 1 Blue Badge
let foods = ["apple", "orange", "rice", "bread", "tofu"]

for (let i = foods.length - 1; i > -1; i--){
    if (i % 2 == 1){
        let word = foods[i]
        let titleCaseWord = titleCase(word)

    console.log(`Foods[${i}];` + titleCaseWord)
    }
}

function  titleCase(word) {
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    return first_letter + rest
}


//For..Of loop challenge

foods = ["apple", "orange", "rice", "bread", "tofu"]
let allergies = ["gluten", "soy"]

for(let food of foods){


    let longWordResult = foodLengthCheck(food) ? "" : "not "
    let response = `${food} is ${longWordResult}a long word, and ${foodAllergyCheck(food)} it with your allergies.`

    console.log(response)
}

function foodLengthCheck(food){
    return food.lenght > 4
}

function foodAllergyCheck(food){
    allergyMap = {
        bread : "gluten",
        tofu : "soy",
    }
    if (allergies.includes(allergyMap[food])){
        return "you can't eat"
    } else {
    
    return "you can eat" 
    }
}

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while(cards.length > 0){
    let card = cards.pop()
    if (typeof card == "string"){
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}
console.log(cards)
console.log(faceCards)
console.log(numberedCards)

function isFaceCard(card){
    switch (card) {
        case "A":
        case "K":
        case "Q":
        case "J":
            return true
            default:
            return false
    }
    return result
}