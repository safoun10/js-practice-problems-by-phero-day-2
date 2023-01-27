// Practice Problem 2

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is =>

// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

var myScore = 85;
var peterScored = 56;
var janeScored = 95;
var tomScored = 66;

if(myScore >= 40){
    if(myScore >= 40 && myScore<= 49){
        console.log("You've got D");
    }
    else if(myScore >= 50 && myScore<= 59){
        console.log("You've got C");
    }
    else if(myScore >= 60 && myScore<= 79){
        console.log("You've got B");
    }
    else if(myScore >= 80 && myScore<= 100){
        console.log("You've got A");
    }
}
else{
    console.log("Sorry, You've failed. Better luck next time.");
}

if(tomScored >= 40){
    if(tomScored >= 40 && tomScored<= 49){
        console.log("Tom got D");
    }
    else if(tomScored >= 50 && tomScored<= 59){
        console.log("Tom got C");
    }
    else if(tomScored >= 60 && tomScored<= 79){
        console.log("Tom got B");
    }
    else if(tomScored >= 80 && tomScored<= 100){
        console.log("Tom got A");
    }
}
else{
    console.log("Sorry, Tom failed. Better luck next time.");
}

if(janeScored >= 40){
    if(janeScored >= 40 && janeScored<= 49){
        console.log("Jane got D");
    }
    else if(janeScored >= 50 && janeScored<= 59){
        console.log("Jane got C");
    }
    else if(janeScored >= 60 && janeScored<= 79){
        console.log("Jane got B");
    }
    else if(janeScored >= 80 && janeScored<= 100){
        console.log("Jane got A");
    }
}
else{
    console.log("Sorry, Jane failed. Better luck next time.");
}

if(peterScored >= 40){
    if(peterScored >= 40 && peterScored<= 49){
        console.log("Peter got D");
    }
    else if(peterScored >= 50 && peterScored<= 59){
        console.log("Peter got C");
    }
    else if(peterScored >= 60 && peterScored<= 79){
        console.log("Peter got B");
    }
    else if(peterScored >= 80 && peterScored<= 100){
        console.log("Peter got A");
    }
}
else{
    console.log("Sorry, Peter failed. Better luck next time.");
}