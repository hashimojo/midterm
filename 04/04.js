function xor(boolA,boolB){
    let result;
    if(boolA == true){
        if(boolB == true){
            result = false;
        } else {
            result = true;
        }
    } else {
        if(boolB == true){
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
