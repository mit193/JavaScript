//question 1

function que1 () {
    for(var i = 1;i<=30;i++) {
        console.log(i);
    }
    
}

//question 2

function que2 () {
    for(var i = 10;i>0;i--) {
        console.log(i)
    }
}

//question 3

function que3 () {
    var sum = 0;
    for(var i =12;i<=33;i++) {
        console.log(i);
        sum+=i;

    }
    console.log("sum of 12 to 33 is:"+sum);
}

//question 4

function que4 () {
    for(var i = 1;i<=30;i++) {
        if(i%2 === 1) {
            console.log(i);
        }
    }
}

//question 5

function que5 () {
    for(var i = 0;i<=30;i++) {
        if(i%2 === 0) {
            console.log(i);
        }
    }
}

// question 6

function que5 () {
    for(var i =2;i<=100;i++) {
        var prime = true;

        for(var j=2;j<j;j++) {

            if(i%j===0) {
                prime == false;
            }
        }
        if(prime === true) {
            console.log(i);
        }
    }
}


