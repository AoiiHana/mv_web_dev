let testNum = Number(document.getElementById("test").value)
let testCase = document.getElementById("opt").value

function testCode(testArg){
    let testStart = Number(testArg.charAt[1])
    if (testNum == 2 && testStart == 9) {
        output("This shouldn't work!")
    }
    else {
        output("This works though")
    }

}

testCode(testCase);