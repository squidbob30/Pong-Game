function choseRandomInteger(max){
    let randomNumberWithFraction = Math.random()*max;
    let randomWholeNumber = Math.floor(randomNumberWithFraction);
    return randomWholeNumber
}