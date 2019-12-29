var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly",
    "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function getRandomWord(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function sentence() {
    var content = getRandomWord(adjectives) + " " + getRandomWord(nouns) + " " + getRandomWord(adverbs) + " " + getRandomWord(verbs) + " because some " + getRandomWord(nouns) + " " + getRandomWord(adverbs) + " " + getRandomWord(verbs) + " " + getRandomWord(preposition) + " a " + getRandomWord(adjectives) + " " + getRandomWord(nouns) + " which, became a " + getRandomWord(adjectives) + ", " + getRandomWord(adjectives) + " " + getRandomWord(nouns) + ".";

    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
