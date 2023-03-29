//calling functions from inside a function:

function rollDie() {
    let roll = Math.floor (Math.random() * 6) + 1;
    console.log (`Rolled: ${roll}`);
};

function throwDice(numRolls) {
for (let i = 0; i < numRolls; i++) {
    rollDie()
}
}
throwDice(3);