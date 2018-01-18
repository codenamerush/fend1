/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var solution="";
    for(var i=0; i<num; i++) {
        solution = solution + "ha";
    }
    return solution + "!";
};

console.log(laugh(4));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function boohoo(){
    return "boohoo!";
};

console.log(cry());

/*
 * Programming Quiz: Inline (5-5)
 */

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy",function(){
var solution="";
for(var i=0; i<2; i++) {
    solution = solution + "ha";
}
return solution + "!";
});
