/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line+"\n";
}

function buildTriangle(num) {
    var solution="";
    for (var i=1; i<= num; i++) {
        var output= makeLine(i);
        solution = solution + output;
    }
    return solution;
}

console.log(buildTriangle(5));