"use strict";
let anyIsBack;
anyIsBack = 3;
anyIsBack = "tres";
anyIsBack = true;
let stringTest1 = "verify";
stringTest1 = anyIsBack;
let unknownValue;
unknownValue = 3;
unknownValue = true;
unknownValue = "opa";
let stringTeste2 = "let's see now";
if (typeof unknownValue === "string") {
    stringTeste2 = unknownValue;
}
