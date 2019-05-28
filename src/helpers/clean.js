function cleanString(string){
    return string.trim().replace(/\s+/g,' ');
}

module.exports = {
    cleanString
}