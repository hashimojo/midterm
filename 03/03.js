function isEvenNumber(integer){
        if(integer % 2 == 0){
            return true;
        }
        return false;
    }
function classifyInt(integer){
    if(isEvenNumber(integer)){
        return "偶数";
    }
    return "奇数";
}