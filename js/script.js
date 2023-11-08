// SNACK 1
const bicycles = [
    {
        nome : "giulietta",
        peso : 1780
    },
    {
        nome : "francesca",
        peso : 2580
    },
    {
        nome : "flavia",
        peso : 3080
    },
]
console.log(bicycles);

const [giulietta, francesca, flavia] = bicycles;

console.log(giulietta, francesca, flavia);

(giulietta.peso > francesca.peso && giulietta.peso > flavia.peso) ? console.log(giulietta) : (francesca.peso > flavia.peso) ? console.log(francesca) : console.log(flavia);

