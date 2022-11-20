// scope

const globalVar = "global";

if (true) {
  const localVarIn1If = "local in 1 if";

  if (true) {
    const localVarIn2If = "local in 2 if";
    console.log("globalVar :>> ", globalVar);
    console.log("localVarIn1If :>> ", localVarIn1If);
    console.log("localVarIn2If :>> ", localVarIn2If);
  }
}

// Lexical Environment / /

const a = "global";

f1();

function f1() {
  const a = "local";
  console.log("a :>> ", a);
  f2();
}

function f2() {
  console.log("a :>> ", a);
}
