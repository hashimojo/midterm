function distance(p1、p2){
    if(p1 == p2){
        return 0;
    }
    p1 = x - y;
    if(p1<0){
        p1 = -p1;
    }
    p2 = x - y;
    if(p2<0){
        p2 = -p2;
    }
    let d;
    d = p1 - p2;
    if(d<0){
        d = -d;
    }
    return d;
}
