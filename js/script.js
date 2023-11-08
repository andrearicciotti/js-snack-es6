// SNACK 1
console.log("snack-1");
const bicycles = [
    {
        nome: "giulietta",
        peso: 1780
    },
    {
        nome: "francesca",
        peso: 2580
    },
    {
        nome: "flavia",
        peso: 3080
    },
]
console.log(bicycles);

const [giulietta, francesca, flavia] = bicycles;

console.log(giulietta, francesca, flavia);

(giulietta.peso > francesca.peso && giulietta.peso > flavia.peso) ? console.log(giulietta) : (francesca.peso > flavia.peso) ? console.log(francesca) : console.log(flavia);

console.log("-----");
// SNACK 2
console.log("snack-2");
const footballTeams = [
    {
        nome: "riverplate",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "monzone",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "forlimpopoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
]
console.log(footballTeams);

footballTeams.forEach(curTeam => {
    curTeam.puntiFatti = getRndInteger(60, 100);
    curTeam.falliSubiti = getRndInteger(180, 300);
});

const updatedFootballTeams = [];

footballTeams.forEach(curTeam => {
    const { nome, falliSubiti } = curTeam;
    curTeam = { nome, falliSubiti };
    updatedFootballTeams.push(curTeam);
});

console.log(updatedFootballTeams);


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log("-----");
// SNACK 3
console.log("snack-3");
const numbersArray = [23, 14, 6, 8, 10];
const newArray = getSubArray(numbersArray, 0, 1);
console.log(newArray);


// FUNCTIONS
function getSubArray(array, numberA, numberB) {

    const subArray = [];
    let position = 0;

    array.forEach(element => {

        (position >= numberA && position <= numberB) ? subArray.push(array[position]) : console.log("number not pushed");;
        
        ++position;
    });

    // console.log(subArray);
    return subArray;
}
console.log("-----");
