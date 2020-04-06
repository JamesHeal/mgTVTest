function MySqrt(num) {
    if (num < 0) {
        return -1;
    }else{
        var differ=0.00001;
        var result = 0;
        flag = true;
        var tempDiffer = -num;
        var lowResult = 0;
        var highResult = num;
        while (Absolute(tempDiffer) > differ) {
            if (tempDiffer < 0) {
                lowResult = result;
                
            } else {
                highResult = result;
            }
            result = (lowResult + highResult)/2;
            tempDiffer = result*result - num;
        }
        return result;
    }
}

function Absolute(num) {
    if (num>=0) {
        return num;
    } else {
        return -num;
    }
}