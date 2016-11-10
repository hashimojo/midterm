function fizzbuzz(n){
    let result;
    if(n % 15 == 0){
        result = "fizzbuzz";
    } else if(n % 3 == 0){
        result = "fizz";
    } else if(n % 5 == 0){
        result = "buzz";
    }  else {
        result = n;
    }
    return result;
}
