var background = {
  "family": [
      "Your family was scattered to the winds by the wars and you have no idea where most of them are",
      "Your family was indentured for crimes against the Empire or on trumped-up charges. Only you escaped.",
      "Your family were marked as sympathizers to a hated race and are not particularly loved in their homeland.",
      "Your family was imprisoned for crimes or on trumped-up charges. You were the only one to escape. You may want to free them...or maybe not.",
      "Your family was exiled to the desert and you likely spent most of your early life struggling to survive in the deadly wasteland.",
      "Your family was ostracized for dissenting opinions and now people won’t socialize with you or your family at all.",
      "Your family house was cursed and now either crops won’t grow or specters roam the halls. It became too dangerous for you to stay in this home",
      "Your family was killed by a rogue mage who either had a vendetta against your family, or just wanted blood. Either way, you are alone.",
      "Your family died in war. They may have actually fought in the war, or were casualties of war who just happened to get in the way.",
      "With so many wars your family’s livelihood was destroyed. Your family turned to crime to survive.",
      "Your family disappeared and you have no idea where they went. One day they just up and left.",
      "Your family has been caught in a feud for centuries. You may not remember why this feud started, but it is dire.",
      "Your family accumulated a huge debt through gambling or favors from others. You need money desperately.",
      "Your family was executed for treason against the Empire. You were the only one to escape this fate.",
      "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive.",
      "Your family has fallen into a feud with another family. You may not even remember why this feud started in the first place.",
      "Your family was stripped of its title for some reason. You were evicted from your home and left scrambling to survive among the un-washed masses.",
      "Your family turned to raiding settlements early in your life to get food and perhaps strike back at society.",
      "Due to some action or inaction your family has become hated in your home town and now no one there wants to have anything to do with them.",
      "Your family name was tarnished by a magic relative who flaunted their magical gift disgracefully.",
      "Your family house is haunted. Most likely this is because your home was the site of many, many deaths during a war.",
      "One day everything you had was ripped away by a bandit mob. Your family was massacred, leaving you entirely alone. ",
      "You disgraced your family in the eyes of the Empire. Something you did or failed to do has ruined your personal name and harmed your family.",
      "Your family has been split by an interracial marriage with a hated race. Some of your family like them and some hate them.",
      "Your family has a deep, dark secret that if discovered would ruin you all completely. You can decide what this secret is, or the Game Master can decide.",
      "Your family has a deep, dark secret that if discovered would destroy them and their name forever. You must protect this secret with your life.",
      "Your family was killed by your society, because they were thought to be revolutionists. They may have been slaughtered or hung with no court proceedings or trials.",
      "Your family has come to despise each other. No one you grew up with will talk with each other any more and you’re lucky to get a passing hello from your siblings.",
      "Your family was assassinated. They may have been in the way of someone’s plan or they may have been used to get at someone more powerful. Either way, your family is gone now.",
      "Your family is descended from an infamous traitor. It taints your family’s interactions with others of the elder races and has made living in your homeland difficult."
  ],

};

function getRandomFamily(){
  const resultElement = document.getElementById('background-result');
  if (resultElement) {
    const randomBackground = background.family[Math.floor(Math.random() * background.family.length)];
    resultElement.innerHTML = "<p><b>Family Background:</b> " + randomBackground + "</p>";
    return randomBackground;
  } else {
    // Fallback for older template
    document.write("<p><b>Family:</b> " + background.family[Math.floor(Math.random() * background.family.length)] + "</p>" );
    return background.family[Math.floor(Math.random() * background.family.length)];
  }
}
var cardTypes = ["City", "Creature", "Enchantment", "Event", "Magic"];

function findAllCardsByType(type_name){
  var items = background.items;
  var res = [];
  for (var i = 0; i<items.length; i++){
    if(items[i].type.name == type_name){
      res.push(items[i]);
    }
  }
  return res;
}

function writeAllCardsByType(type_name){
  var foundCards = findAllCardsByType(type_name);
  var i;
  for(i = 0; i < foundCards.length; i++) {
    document.write("<p>" + foundCards[i].name +"</p>");
  }
}

function writeRandomCardsByType(type_name){
  var foundCards = findAllCardsByType(type_name);
  document.write("<p>" + foundCards[Math.floor(Math.random() * foundCards.length)].name +"</p>");
}

function writeRandomCardFromEachType(){
  for(var i = 0; i < cardTypes.length; i++){
    var foundCard = findAllCardsByType(cardTypes[i]);
    var randCard = foundCard[Math.floor(Math.random() * foundCard.length)];
    document.write("<p><b>" + randCard.type.name + ":</b> " + randCard.name + "</p>" )
  }
}
