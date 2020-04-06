function ClimbFrog(floorAmount) {
    if (floorAmount<=0) {
        return 0;
    }else if (floorAmount == 1) {
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