function throwErr(err: string, codeX: number): never { // never: código que não finalizou -- void: código que não retorna
    throw {error: err, code: codeX}
}

throwErr("Unexpected error", 500);