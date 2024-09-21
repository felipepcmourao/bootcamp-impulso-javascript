const person = {
    name: "Felipe",
    age: 28,
    profession: "developer"
}

person.age = 29;

const andre: {name: string, age: number, profession: string} = {
    name: "André",
    age: 26,
    profession: "Painter"
}

const paula: {name: string, age: number, profession: string} = {
    name: "Paula",
    age: 24,
    profession: "Developer"
}

enum Profession {
    Professor,
    Actress,
    Developer,
    Lawyer,
    Athlete
}

enum Subjects {
    JavaScript,
    TypeScript,
    Angular,
    Vue,
}

interface Person {
    name: string,
    age: number,
    profession?: Profession
}

interface Student extends Person {
    subject: string[]
}

const vanessa: Person = {
    name: "Vanessa",
    age: 32,
    profession: Profession.Developer
}

const maria: Person = {
    name: "Maria",
    age: 34,
    profession: Profession.Professor
}

const jessica: Student = {
    name: "Jessica",
    age: 28,
    profession: Profession.Developer,
    subject: ["Math", "Programming"]
}

const monica: Student = {
    name: "Jessica",
    age: 28,
    subject: ["Geography", "History"]
}

function list(list: string[]) {
    for (const item of list){
        console.log(`- ${item}`);
    }
}

list(monica.subject);