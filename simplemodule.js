
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