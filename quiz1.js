function sumArray (arr){
    if(!arr instanceof Array || arr === null || arr.length <=2 ){
        return 0;
    }
    var temp = arr;
    var minFlag = 0;
    var maxFlag = 0;
    var sum = 0;
    for(i=0;i<temp.length;i++) {
        if (minFlag == 0 && temp[i] == Math.min.apply(null, temp)) {
            minFlag++;
            temp.splice(i, 1);
        }
        if (maxFlag == 0 && temp[i] == Math.max.apply(null, temp)) {
            maxFlag++;
            temp.splice(i, 1);
        }
    }
    console.log(temp);
    for (var i = 0; i < temp.length; i++){
        sum += parseInt(temp[i]);
    }
    return sum;
}

module.exports = sumArray;