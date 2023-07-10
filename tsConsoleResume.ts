interface myself {
    myName: string,
    careerField: string,
    aboutMe: string
}

const me: myself = {
    myName: "Jesse Cammarano",
    careerField: "Cook",
    aboutMe: "I am a musician, cook, and aspiring web-developer."
};

const interests: string[] = ["Super Mario Bros.", "Music", "Drums", "Guitar", "Horror Movies"];

const previousJobs: string[] = ["Castaways Gastropub: Line Cook",
    "Jan's Place Restaurant: Line Cook/Host",
    "Bagel Break Cafe: Short-Order Cook",
    "Jaime's Natural Nutrition: Cook, Smoothie Maker, Customer Service"];

interface skills {
    skill: string,
    cool: boolean
}

let skill1 = {
    skill: "Guitar",
    cool: true
};

let skill2 = {
    skill: "Drums",
    cool: true
};

let skill3 = {
    skill: "Cooking",
    cool: true
};

let skill4 = {
    skill: "Rollerskating",
    cool: false
};

let skill5 = {
    skill: "Super Mario Bros.",
    cool: true
};

const skills: skills[] = [skill1, skill2, skill3, skill4, skill5]

console.log(me.myName.toUpperCase());
console.log(me.careerField);
console.log(me.aboutMe);
console.log(".................................");

function displayPosition(string: string) {
    let items = string
    return items
};

console.log("My Interests:")

for (let i = 0; i < interests.length; i++) {
    console.log(displayPosition(interests[i]));
};

console.log(".................................");

console.log("Previous Positions:");

for (let i = 0; i < previousJobs.length; i++) {
    console.log(displayPosition(previousJobs[i]));
};

console.log(".................................");

function displaySkill(skill: string, cool: boolean) {
    if (cool == true) {
       let item = "BAM: " + skill;
        return item;
    }
    return skill;
};


console.log("My Skills:");

for (let i = 0; i < skills.length; i++) {
    console.log(displaySkill(skills[i].skill, skills[i].cool))
};

console.log(".................................");
