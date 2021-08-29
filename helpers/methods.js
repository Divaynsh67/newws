function hideExtra(str) {
    if(str.length>=50){
        str = str.substring(45,-1)
        str = str + "..."
    }
    return str
}
module.exports ={
    hideExtra,
}