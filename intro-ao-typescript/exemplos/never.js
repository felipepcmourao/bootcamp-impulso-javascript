"use strict";
function throwErr(err, codeX) {
    throw { error: err, code: codeX };
}
throwErr("Unexpected error", 500);
