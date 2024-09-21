let anyIsBack: any;

anyIsBack = 3;
anyIsBack = "tres";
anyIsBack = true;

let stringTest1: string = "verify"
stringTest1 = anyIsBack

let unknownValue: unknown;

unknownValue = 3;
unknownValue = true;
unknownValue = "opa";

let stringTeste2: string = "let's see now"

if (typeof unknownValue === "string") {
    stringTeste2 = unknownValue
}