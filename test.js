var ClimbFrog = (n) => {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        var result = ClimbFrog(n - 1) + ClimbFrog(n - 2);
        return result;
    }
}

function ClimbFrog_1(floorAmount) {
    if (floorAmount <= 0) {
        return 0;
    } else if (floorAmount == 1) {
        return 1;
    } else if (floorAmount == 2) {
        return 2;
    } else {
        var result = 0;
        var resultFormerOne = 1;
        var resultFormerTwo = 2;
        for (let index = 2; index < floorAmount; index++) {
            result = resultFormerOne + resultFormerTwo;
            resultFormerOne = resultFormerTwo;
            resultFormerTwo = result;
        }
        return result;
    }
}

console.log(ClimbFrog(10))
console.log(ClimbFrog_1(10))