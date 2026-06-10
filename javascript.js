let coolImage = document.getElementById("coolImage");
let coolImageOpacity = 0;
let lastTime = Date.now();
let appearSound = new Audio("./whyhellogordonfreeman.wav");
let shuffleSound = new Audio("./mafia.ogg");
let lastNaturalWidth = 0;
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
    ["expie.gif", "[BIOMETRIC REPORT - 25##-11-19-18-49-58-4587]\n<>\nENTITY CLASS: Biological\nENTITY SUBCLASS: Sawian\nENTITY NAME: Experiment\n<>\n[CONTENTS]\n\nThe stable biological version of our newest project is ready.\nIt appears that, mentally, there wasn't and will be nothing left of our original human volunteer, not to mention the rest of the subjects.\nDespite that, they seem to be learning fast, and are not retaliating.\n<>\nThe DNA combination caused the Experiment to be considerably smaller in stature than a human person, and lack fat and muscle mass.\nDespite this, it's muscle and bone density is much higher. This will assumbly result in the specimen being resilient to various forms of physical trauma... And give it a hard time swimming.\nIt has three protrusions at the back of its skull, of form similar to ear cartilage. Somehow, it has an ear structure similar to that of an avian - must've been lying around somewhere in the DNA we spliced.\nIt is thinly furred, and has pink-ish yellow-ish flesh, as seen on wounds and on the inside of the mouth.\nIts hands are some kind of combination between a canine's and a homosapiens'. I know one of my co-workers is going to enjoy the paws-\nSomehow, the bioluminescent eyes from our earlier prototypes of this species have stayed. We are yet to determine the exact effects this has on their sight.\n<>\nWe will soon clone this specimen 30 times to conduct destructive testing on the clones. We will leave a few to naturally reproduce, to save on resources.\n\n[END]"],
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
setInterval(function(){
    if (!coolImage.complete){
        lastTime = getTime();
    }
    coolImageOpacity = (getTime() - lastTime) * 0.0005;
    setCoolImgOpacity();
},1000/20)
//let firstClick = true;

function onClick(){
    document.getElementById("audio").play();
    lastTime = getTime();
    coolImageOpacity = 0;
    setCoolImgOpacity();
    setRandomImage();
}
function setRandomImage(){
    lastNaturalWidth = coolImage.width;
    console.log(lastNaturalWidth);
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
        randomizeDocTitle(selectedGifName[0]);
    }else{
        coolImage.src = "./images/"+selectedGifName;
        displayText("");
        randomizeDocTitle(selectedGifName);
    }
    
}
let casUTitles = [
    "Target planet",
    "Gray planet",
    "Gravel lands",
    "Radioactive wasteland",
    "Deeper gravel lands",
    "Dried desert",
    "Overgrown depths",
    "Frozen chasm",
    "Fungal pools",
    "Crystalline hollow",
    "Geothermal vents",
    "An expression of malignant intent, from something far, far beyond your limited physical comprehension.",
    "I am the all that I possess. Are you?",
    "You really think this thing is worth getting all the way down there? I can make plenty more.",
    "There is always a price of silence.",
    "Always watching.",
    "I can wait all day.",
    "I am still here.",
    "It's impolite to make someone wait.",
    "Make sure to stretch your legs.",
    "How interesting. Please continue.",
    "This place has more interest than you could ever comprehend."
]
let documentTitles = [
    "brandon6875935",
    "purple deviled egg",
    "faith the unholy trinity",
    "what",
    "christmas time is here",
    "demo 6",
    "moonlit kingdom",
    "716",
    "sky islands",
    "the depths",
    "rochas313",
    "ive always been here",
    "the remains",
    "the silent orchestra",
    "burning basement",
    "spectre's realm",
    "house of spiders",
    "master spark",
    "city of tears",
    "emerald lakeside",
    "Muses",
    "inkwell isle one",
    "1273",
    "skeld",
    "the fire is flickering.",
    "london",
    "act 3 - the beyond",
    "act 2 - the city",
    "act 1 - the exordium",
    "glory",
    "nuke the whales",
    "safety department",
    "floor of general works",
    "my summer website",
    "trinity council",
    "undead nocturn",
    "pax in morte",
    "The Isle",
    "[WINDY ISLAND]",
    "[TEN-MOU]",
    "Guenther Calland",
    "final hours",
    "yorick's resting place",
    "erdtree",
    "mansion",
    "is this thing on?",
    "a few quick matches",
    "pico park",
    "peak",
    "aperture science enrichment center",
    "GLaDOS",
    "wisp",
    "kit_4seasons",
    "omni pebbles",
    "chris pratt!",
    ":3",
    "onett",
    "sawian nuclear power plant",
    "black mesa",
    "the parish",
    "lose your way. find your voice",
    "hiisi base",
    "ventricular tachycardia",
    "it come with egg roll",
    "Nashatra Bealdhild",
    "nether",
    "hollow",
    "corruption",
    "wall of flesh",
    "crimson",
    "void",
    "nullscape",
    "the celestial",
    "Find Your Flame",
    "Won't you hear my Symphony?",
    "It Doesn't End Here",
    "completing the mission",
    "fleeing the complex",
    "all hail tom scott",
    "competent",
    "carrion",
    "pizzeria",
    "Hatred",
    "the stalker",
    "The Nobody",
    "Wilson Nyugen",
    "wordle",
    "illusionary",
    "asya shubina",
    "schoolhouse",
    "town of salem",
    "runescape",
    "bloons tower defense",
    "truman show",
    "the defect",
    "saikai",
    "alan becker",
    "hi",
    "hey",
    "what's up",
    "creature feature",
    "20-Adamance",
    "8-Titan",
    "71-Gordion",
    "they're in the walls",
    "snowdin",
    "hotland",
    "Futures, made of...",
    "only.time.will.tell",
    "builders united league",
    "reliable excavation demolition",
    "You hear a whir...",
    "mosa lina",
    "baba is you",
    "madeline",
    "mount celeste",
    "path of pain",
    "orange hell",
    "red44",
    "satyr44",
    "could a moron punch you into this pit",
    "zombie on your lawn",
    "afterbeat",
    "project arrythmia",
    "cult of the lamb",
    "on firewatch",
    "gone fishing",
    "garry's mod",
    "jack move",
    "gigastructure",
    "some kind of evil resident",
    "rotate or die",
    "blood is fuel",
    "artful",
    "The Clock Reads, 12,436,870,604,121:01AM.",
    "critical strike",
    "countless worlds...",
    "nexus gd",
    "zoink",
    "draw 5 strikes",
    "Papers, please.",
    "the one who waits",
    "the world machine",
    "uncle ben what happened",
    "Your Only Move Is HUSTLE",
    "After The Flash",
    
];
function randomizeDocTitle(gifName){
    let finalTitle = documentTitles[getRandomInt(documentTitles.length)];
    switch(gifName){
        case "":
            finalTitle = "";
            break;
        case "expie.gif":
            finalTitle = casUTitles[getRandomInt(casUTitles.length)];
            break;
    }
    document.title = finalTitle;
}

document.addEventListener("click",onClick);