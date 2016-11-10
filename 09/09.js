function gcd(naturalA,naturalB){
    let j1;
    let j2;
    let j3;
    j1 = naturalA;
    j2 = naturalB;
    if(j1 == j2){
        if(j1 == 1){
            return 1;
        }
        return j1
    } else if(j1 == 1){
        return 1;
    } else if(j2 == 1){
        return 1;
    } else {
        while((j3 = j1 % j2) != 0){
            j1 = j2;
            j2 = j3;
        }
        return j2;
    }
}
