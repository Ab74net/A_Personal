// Typescript example: button click counter
let count: number = 0;


const button = document.getElementById("ts-button");


button?.addEventListener("click", () => {
count++;
alert(`Button clicked ${count} times!`);
});