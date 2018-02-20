function decypherPhase(obj, srt) {
    var reversObj = new Object();
    for (var prop in obj) {
        reversObj[obj[prop]] = prop;
    }
    return cypherPhrase(reversObj, str);
}
