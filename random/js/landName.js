var nm1 = ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z",
    "", "", "", "", ""];

var nm2 = ["a", "e", "o", "u"];

var nm3 = ["br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sh", "sc", "sk", "sm", "sn",
    "sp", "st", "sw", "ch", "sh", "th", "wh"];

var nm4 = ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy",
    "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"];

var nm5 = ["stan", "dor", "vania", "nia", "lor", "cor", "dal", "bar", "sal", "ra", "la", "lia", "jan", "rus", "ze",
    "tan", "wana", "sil", "so", "na", "le", "bia", "ca", "ji", "ce", "ton", "ssau", "sau", "sia", "ca", "ya", "ye",
    "yae", "tho", "stein", "ria", "nia", "burg", "nia", "gro", "que", "gua", "qua", "rhiel", "cia", "les", "dan", "nga",
    "land"];

var nm6 = ["ia", "a", "en", "ar", "istan", "aria", "ington", "ua", "ijan", "ain", "ium", "us", "esh", "os", "ana", "il",
    "ad", "or", "ea", "eau", "ax", "on", "ana", "ary", "ya", "ye", "yae", "ait", "ein", "urg", "al", "ines", "ela"];

function getLandName(sampleSize = 1) {
    var ret = [];
    for (i = 0; i < sampleSize; i++) {
        var set = Math.floor(Math.random() * 5) + 1;
        if (set == 1) {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm4.length);
            rnd5 = Math.floor(Math.random() * nm5.length);
            landName = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
        } else if (set == 2) {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm6.length);
            landName = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm6[rnd4];
        } else if (set == 3) {
            rnd = Math.floor(Math.random() * nm3.length);
            rnd2 = Math.floor(Math.random() * nm4.length);
            rnd3 = Math.floor(Math.random() * nm5.length);
            landName = nm3[rnd] + nm4[rnd2] + nm5[rnd3];
        } else if (set == 4) {
            rnd = Math.floor(Math.random() * nm2.length);
            rnd2 = Math.floor(Math.random() * nm3.length);
            rnd3 = Math.floor(Math.random() * nm6.length);
            landName = nm2[rnd] + nm3[rnd2] + nm6[rnd3];
        } else {
            rnd = Math.floor(Math.random() * nm3.length);
            rnd2 = Math.floor(Math.random() * nm4.length);
            rnd3 = Math.floor(Math.random() * nm1.length);
            rnd4 = Math.floor(Math.random() * nm3.length);
            rnd5 = Math.floor(Math.random() * nm6.length);
            landName = nm3[rnd] + nm4[rnd2] + nm1[rnd3] + "  " + nm3[rnd4] + nm6[rnd5];
        }
        ret.push(landName);
    }
    return ret;
}