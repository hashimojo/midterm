function isLeapYear(yearInAD){
    let result;
    if(yearInAD % 400 == 0){
        result = true;
    } else if(yearInAD % 100 == 0){
        result = false;
    } else if(yearInAD % 4 == 0){
        result = true;
    } else {
        result = false;
    }
    return result;
}
