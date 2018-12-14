
module.exports.getDateYYYYMMDD = function(){
    let todayDate = new Date();
    return todayDate.getFullYear() + "/" + (todayDate.getMonth()+1) + "/" + todayDate.getDate()
}

module.exports.getDateDDMMYYYY = function (){
    let todayDate = new Date();
    return todayDate.getDate() + "/" + (todayDate.getMonth()+1) + "/" + todayDate.getFullYear();
}

module.exports.getDateDDMMYYYYHHMMSS = function(){
    let todayDate = new Date();
    return todayDate.getDate() + "/" + (todayDate.getMonth()+1) + "/" + todayDate.getFullYear() 
        + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
}

module.exports.getFactoralFor = function(n){
    var num = n;
    var numArr = [];
    while(num > 0){
        numArr.push(num);
        num--;
    }
    var nNumFact = numArr.reduce(function(preval,currval){
        return preval * currval;
    });
    console.log("Factorial IS >> " ,nNumFact);
    return nNumFact;
}

module.exports.checkPrimeNumberFor = function(n){
    var numPrime = [];
    var chkArr = [2,3,4,5,6,7,8,9];
    var chkoddArr = [3,5,7,9];
    var numArr = n;

    numArr.forEach(element => {
        
        if(element === 2){
            numPrime.push(element);
        }
        if(element % 2 === 1){
            var istrue = chkArr.some(function(ele){
                if(element < 9 && element % ele === 0 && ele === element){
                    return true;
                }            
            });
            if(istrue){
                numPrime.push(element);
            }
            else{
                istrue = chkoddArr.some(function(ele){
                    if(element % ele !== 0){
                        return false;
                    }
                });                    
            }
            if(!istrue){
                numPrime.push(element);
            }                      
        }
    });
    console.log("Prime Numbers are >> " ,numPrime.toString());
    return numPrime;
}