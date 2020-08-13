document.getElementById("button").onclick=showHoroscope;
function showHoroscope(){
  var day = parseFloat(document.getElementById("day").value);
  var month = parseFloat(document.getElementById("month").value);
  if ((month==4 && day<=20) || (month==3 && (day>=21 && day<=31))){
      showAries();
  } else if ((month ==5 && day<=21) || (month==4 && (day>= 21 && day<=30))){
    showTaurus();
  }else if ((month ==6 && day<=21) || (month==5 && (day>= 22 && day<=31))){
    showGem();
  } else if ((month ==7 && day<=22) || (month==6 && (day>= 22 && day<=30))){
    showCancer();
  }else if ((month ==8 && day<=22) || (month==7 && (day>= 23 && day<=31))){
    showLeo();
  }else if ((month ==9 && day<=22) || (month==8 && (day>= 23 && day<=31))){
    showVirgo();
  }else if ((month ==10 && day<=22) || (month==9 && (day>= 23 && day<=30))){
    showLibra();
  }else if ((month ==11 && day<=21) || (month==10 && (day>= 23 && day<=31))){
    showScorpio();
  }else if ((month ==12 && day<=21) || (month==11 && (day>= 22 && day<=30))){
    showSag();
  }else if ((month ==1 && day<=20) || (month==12 && (day>= 22 && day<=31))){
    showCap();
  }else if ((month ==2 && day<=19) || (month==1 && (day>= 21 && day<=31))){
    showAqua();
  }else if ((month ==3 && day<=20) || (month==2 && (day>= 20 && day<=29))){
    showPis();
  }

}
document.getElementById("aries").onclick=showAries;
function showAries(){
  document.getElementById("newImg").innerHTML='<img src="images/aries.png">'
  document.getElementById("horoscopeP").innerHTML= "ARIES: Ruled by Fire, the Ram lives in the moment and moves fast and furiously. They're natural-born leaders, and impossible to ignore! They are always ready to take charge and conquer whatever challenge they meet. Courageous and competitive, Aries is a powerful force, carving paths through new territory to find undiscovered treasures. This fearless sign lives life as a warrior, infusing everything it touches with fire, passion, and strength."
}
document.getElementById("taurus").onclick=showTaurus;
function showTaurus(){
  document.getElementById("newImg").innerHTML='<img src="images/taurus.png">'
  document.getElementById("horoscopeP").innerHTML="TAURUS: Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart."
}
document.getElementById("gem").onclick=showGem;
function showGem(){
  document.getElementById("newImg").innerHTML='<img src="images/gem.png">'
  document.getElementById("horoscopeP").innerHTML="GEMINI: Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs."
}
document.getElementById("cancer").onclick=showCancer;
function showCancer(){
  document.getElementById("newImg").innerHTML='<img src="images/cancer.png">'
  document.getElementById("horoscopeP").innerHTML="CANCER: Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life."
}
document.getElementById("leo").onclick=showLeo;
function showLeo(){
  document.getElementById("newImg").innerHTML='<img src="images/leo.png">'
  document.getElementById("horoscopeP").innerHTML="LEO: Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader."
}
document.getElementById("virgo").onclick=showVirgo;
function showVirgo(){
  document.getElementById("newImg").innerHTML='<img src="images/virgo.png">'
  document.getElementById("horoscopeP").innerHTML="VIRGO: Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure."
}
document.getElementById("libra").onclick=showLibra;
function showLibra(){
  document.getElementById("newImg").innerHTML='<img src="images/libra.png">'
  document.getElementById("horoscopeP").innerHTML="LIBRA: Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count."
}
document.getElementById("scorpio").onclick=showScorpio;
function showScorpio(){
  document.getElementById("newImg").innerHTML='<img src="images/scorpio.png">'
  document.getElementById("horoscopeP").innerHTML="SCORPIO: Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty."
}
document.getElementById("sag").onclick=showSag;
function showSag(){
  document.getElementById("newImg").innerHTML='<img src="images/sag.png">'
  document.getElementById("horoscopeP").innerHTML="SAGITTARIUS: Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie."
}
document.getElementById("cap").onclick=showCap;
function showCap(){
  document.getElementById("newImg").innerHTML='<img src="images/cap.png">'
  document.getElementById("horoscopeP").innerHTML="CAPRICON: Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave."
}
document.getElementById("aqua").onclick=showAqua;
function showAqua(){
  document.getElementById("newImg").innerHTML='<img src="images/aqua.png">'
  document.getElementById("horoscopeP").innerHTML="AQUARIUS: Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born."
}
document.getElementById("pis").onclick=showPis;
function showPis(){
  document.getElementById("newImg").innerHTML='<img src="images/pis.png">'
  document.getElementById("horoscopeP").innerHTML="PISCES: Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?"
}
