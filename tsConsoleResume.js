var me = {
    myName: "Jesse Cammarano",
    careerField: "Cook",
    aboutMe: "I am a musician, cook, and aspiring web-developer."
};
var interests = ["Super Mario Bros.", "Music", "Drums", "Guitar", "Horror Movies"];
var previousJobs = ["Castaways Gastropub: Line Cook",
    "Jan's Place Restaurant: Line Cook/Host",
    "Bagel Break Cafe: Short-Order Cook",
    "Jaime's Natural Nutrition: Cook, Smoothie Maker, Customer Service"];
var skill1 = {
    skill: "Guitar",
    cool: true
};
var skill2 = {
    skill: "Drums",
    cool: true
};
var skill3 = {
    skill: "Cooking",
    cool: true
};
var skill4 = {
    skill: "Rollerskating",
    cool: false
};
var skill5 = {
    skill: "Super Mario Bros.",
    cool: true
};
var skills = [skill1, skill2, skill3, skill4, skill5];
console.log(me.myName.toUpperCase());
console.log(me.careerField);
console.log(me.aboutMe);
console.log(".................................");
function displayPosition(string) {
    var items = string;
    return items;
}
;
console.log("My Interests:");
for (var i = 0; i < interests.length; i++) {
    console.log(displayPosition(interests[i]));
}
;
console.log(".................................");
console.log("Previous Positions:");
for (var i = 0; i < previousJobs.length; i++) {
    console.log(displayPosition(previousJobs[i]));
}
;
console.log(".................................");
function displaySkill(skill, cool) {
    if (cool == true) {
        var item = "BAM: " + skill;
        return item;
    }
    return skill;
}
;
console.log("My Skills:");
for (var i = 0; i < skills.length; i++) {
    console.log(displaySkill(skills[i].skill, skills[i].cool));
}
;
console.log(".................................");
