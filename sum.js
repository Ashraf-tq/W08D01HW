function sum(){
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result
}


module.exports = sum;
