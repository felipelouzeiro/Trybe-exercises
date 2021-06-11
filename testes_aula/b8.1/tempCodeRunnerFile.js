const wakeUp = () => "Acordando!!";
const breackfast = () => "Bora tomar um café!!";
const toSleep = () => "Partiu dormir!!";

const doingThings = (func) => func();

console.log(doingThings(toSleep));