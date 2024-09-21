"use strict";
const person = {
    name: "Felipe",
    age: 28,
    profession: "developer"
};
person.age = 29;
const andre = {
    name: "André",
    age: 26,
    profession: "Painter"
};
const paula = {
    name: "Paula",
    age: 24,
    profession: "Developer"
};
var Profession;
(function (Profession) {
    Profession[Profession["Professor"] = 0] = "Professor";
    Profession[Profession["Actress"] = 1] = "Actress";
    Profession[Profession["Developer"] = 2] = "Developer";
    Profession[Profession["Lawyer"] = 3] = "Lawyer";
    Profession[Profession["Athlete"] = 4] = "Athlete";
})(Profession || (Profession = {}));
var Subjects;
(function (Subjects) {
    Subjects[Subjects["JavaScript"] = 0] = "JavaScript";
    Subjects[Subjects["TypeScript"] = 1] = "TypeScript";
    Subjects[Subjects["Angular"] = 2] = "Angular";
    Subjects[Subjects["Vue"] = 3] = "Vue";
})(Subjects || (Subjects = {}));
const vanessa = {
    name: "Vanessa",
    age: 32,
    profession: Profession.Developer
};
const maria = {
    name: "Maria",
    age: 34,
    profession: Profession.Professor
};
const jessica = {
    name: "Jessica",
    age: 28,
    profession: Profession.Developer,
    subject: ["Math", "Programming"]
};
const monica = {
    name: "Jessica",
    age: 28,
    subject: ["Geography", "History"]
};
function list(list) {
    for (const item of list) {
        console.log(`- ${item}`);
    }
}
list(monica.subject);
