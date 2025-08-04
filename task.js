// task -1
console.log("task -1")

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(player + ` got ` + points + ` points and won the ` + game + ` game!`)
} else {
    console.log(`The winner is ` + opponent + `! ` + player + `lost the game`)
}

// Task - 2:
console.log("task -2")
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];


function print(printArray) {
    for (let i = 0; i < printArray.length; i++) {
        console.log(printArray[i]);
    }
}

print(myCourses);

// task - 3
console.log("task -3")
localStorage.setItem("courseArr", JSON.stringify(myCourses))
const fromLocal = JSON.parse(localStorage.getItem("courseArr"))
console.log(fromLocal)


// Task 4:
console.log("task -4")
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let inputBtn = document.getElementById("score-btn")
inputBtn.addEventListener("click", function(){
     console.log(`${data[0].player} Score is ${data[0].score} `);
})


// task 5
console.log("Task 5")

function generateSentence(desc, arr) {
    let sentence = "The " + arr.length + " " + desc + " are ";

    for (let i = 0; i < arr.length; i++) {
        sentence += arr[i];

        if (i < arr.length - 1) {
            sentence += ", ";
        }
    }

    return sentence;
}

console.log(generateSentence("largest countries", ["China", "India", "USA"]));
console.log(generateSentence("best fruits", ["Apples", "Bananas"]));








