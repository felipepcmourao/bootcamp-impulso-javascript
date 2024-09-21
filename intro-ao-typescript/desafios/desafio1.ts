// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

const employee: {code: number, name: string} = {
    code: 10,
    name: "John",
};

// ou //

interface Employee {code: number, name: string}

const employee1: Employee = {
    code: 10,
    name: "John",
};
