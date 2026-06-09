let coolImage = document.getElementById("coolImage");
let coolImageOpacity = 0;
let lastTime = Date.now();
let appearSound = new Audio("./whyhellogordonfreeman.wav");
let shuffleSound = new Audio("./mafia.ogg");
const fileNames = [
    "catexplosion.gif",
    "hopebunny.gif",
    "jinx.jpg",
    "pvz.gif",
    "ccat.gif",
    "georgecooper.gif",
    "zeus.gif",
    "halloween.gif",
    "jack.gif",
    "catstairs.gif",
    "sm.png",
    "turner.gif",
    "spiderman.gif",
    "killerkyle.gif",
    ["gothamchess.jpg","It's time to lock in."],
    "catflash.gif",
    "2024.gif",
    "train.gif",
    "ashton.gif",
    "huhcat.gif",
    "whathappened.gif",
    "classglitch.gif",
    "ace.gif",
    "inv.gif",
    "verse.gif",
    "jerma985.gif",
    ["expie.gif", "i love casualties: unknown. this is an amazing game that everybody should play once in their lifetime because it is so amazing. when you think survival game, you should think casualties: unknown. not minecraft. not any other game. this game is so expressive. you can almost feel the experiment's pain and anguish as they descend the layers, trying their hardest to not die. this game is so beautifully punishing and rewarding. any little mistake you make can lead to hours upon hours of lost time, never to be reclaimed. it teaches you to take a step back and to devise strategies. with a multitude of health mechanics and a detailed crafting system, you don't get to be ignorant. ignorance and blindness do not lead to consistent depths. casualties: unknown is an experience that transcends the traditional game. the games that players play to do feckless tricks. no. casualties: unknown holds a special spark. the game plays you as much as you play it. it's almost like getting over it with bennett foddy. playing something like terraria or minecraft could never simulate the complexity of casualties: unknown. and the story is amazing! the story is amazing. it's hard to see at face value, but it's so, so there. i could go on and on and on about this game. in fact i will. i've played so many games in my lifetime. too many. games are fun. but over the many, many years, games have lost a thrill. eventually, you learn. i learned. you see patterns in games. at some point, you can figure out a game and shake it upside down within a few hours. be competent. but casualties: unknown breaks this pattern. when i first played it, it implanted a feeling of unbridled, \"oh snap i'm dying\", in me. alerts blare alongside an unfamiliar, unfriendly panel that details every important aspect of the experiment, down to their blood oxygen concentration. the death didn't seem as fake as other games make it out to be. there is real tension, real attention inside of casualties: unknown. the game makes you WANT to live, not die and start up another run. you don't think about what you're gonna do when you have to restart the run, you think about how you'll pull yourself through- to keep going. and that's what really makes the game special. i don't think i've ever felt so much whiplash at a nearly black death screen. orsoniks is a wizard and a magician and an amazing game developer who knows how to manipulate the players. play casualties: unknown."],
    ["marinakaplan.gif", "zat o"],
    ["jarvis.gif", "for educational purposes only"],
    "arayashiki.gif",
    "idk.gif",
    "smilingfriends.gif",
    "metroman.gif",
    "backrooms.gif",
    "bighero.gif",
    "mario.gif",
    ["kingpin.gif","\"the guy who clicks the pen. the guy from the movie clicking the pen\" - ben"],
    "speed.gif",
    ["uhh.gif","?"],
    "bangingwindow.gif",
    "gangway.gif",
    "furkan.gif",
    "minecraft.gif",
    "sitsandkills.gif",
    ["moldmoldy.gif","look at the stars"],
    "fistofrage.gif",
    "pibble.gif",
    "getreal.gif",
    "cabinet.gif",
    "twitterblender.gif",
    "soggy.gif",
    ["mario17.gif","take it as you will"],
    "yakuza.gif",
    "tigerdog.gif",
    "markiplierrevival.gif",
    ["slugcatpet.gif","143 rain world"],
    ["niceguy.gif","courtesy of tully"],
    ["insane.gif","pay more than cash you cretin"],
    "sackboy.gif",
    ["starwarsbirthday.gif","...wh... ...what... yeah... yes!"],
    ["","E&nbsp s&nbsp g M ,&nbsp ra in&nbsp&nbsp ou."],
    "meal.jpg",
    "markcat.png",
    "markbreakingitdown.gif",
    "balls716.gif",
    "gatowithrock.gif",
    "newage.gif",
    "codyrhodes.gif",
    "quaver.gif",
    "todomundo.gif",
    "dio.gif",
    ["catdrugs.gif","woah what does that say"],

]
let available = fileNames.slice();
let coolText = document.getElementById("coolText");
let typewriteInterval = null;
document.getElementById("audio").play();
function setCoolImgOpacity(){
    coolImage.style["opacity"] = coolImageOpacity;
}
function getTime(){
    return Date.now();
}
function displayText(text){
    coolText.innerHTML = "";
    coolText.style.opacity = "0";
    if (typewriteInterval != null){
        clearInterval(typewriteInterval);
    }
    if (text != ""){
        let currentText = ""
        coolText.style.opacity = "0.7";
        let i = 0;
        typewriteInterval = setInterval(function(){
            currentText += text.charAt(i);
            coolText.innerHTML = currentText;
            i++;
            if (i >= text.length){
                clearInterval(typewriteInterval);
            }
        },1000/32)
    }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function removeAvailable(gifName){
    available.splice(available.indexOf(gifName),1)
    if (available.length <= 0){
        available = fileNames.slice();
        shuffleSound.play();
    }
}
setCoolImgOpacity();
setRandomImage();
setInterval(function(){
    coolImageOpacity = (getTime() - lastTime) * 0.0005;
    setCoolImgOpacity();
},1000/20)

function onClick(){
    lastTime = getTime();
    coolImageOpacity = 0;
    setCoolImgOpacity();
    setRandomImage();
}
function setRandomImage(){
    let selectedGifName;
    let num = getRandomInt(available.length);
    selectedGifName = available[num];
    removeAvailable(selectedGifName);
    if (Array.isArray(selectedGifName)){
        coolImage.src = "./images/"+selectedGifName[0];
        displayText(selectedGifName[1]);
        appearSound.pause();
        appearSound.currentTime = 0;
        appearSound.play();
    }else{
        coolImage.src = "./images/"+selectedGifName;
        displayText("");
    }
    
}

document.addEventListener("click",onClick);