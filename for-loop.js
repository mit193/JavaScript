// question 1

function que1() {
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// question 2

function que2() {
    for (var i = 10; i > 0; i--) {
        console.log(i)
    }
}

// question 3

function que3() {
    for (var i = 1; i <= 50; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// question 4

function que4() {
    for (var i = 2; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// question 5

function que5() {
    for (var i = 40; i <= 60; i++) {
        console.log(i);
    }
}

// question 6

function que6() {
    for (var i = 80; i <= 100; i++) {
        console.log(i);
    }
}

// question 7

function que7() {
    var num = prompt("Enter number between 1 to 5");
    num = parseInt(num);

    if (num >= 1 && num <= 5) {
        for (var i = 0; i <= 10; i++) {
            var n = 0;
            n = num + i;
            console.log(n);
            alert(n);
        }

    } else {
        alert("Enter a valid number between 1 to 5");
    }
}

// question 8


function que8() {
    var number = prompt("enter between 123 to 127");

    if (number === "123") {
        alert("One Two Three");

    } else if (number === "124") {
        alert("One Two Four");

    } else if (number === "125") {
        alert("One Two Five");

    } else if (number === "126") {
        alert("One Two Six");

    } else if (number === "127") {
        alert("One Two Seven");

    } else {
        alert("Enter a valid number");
    }
}

//question 9

function que9() {
    var number1 = prompt("Enter between 1 to 5");

    if (number1 === "1") {
        alert("One");

    } else if (number1 === "2") {
        alert("Two");

    } else if (number1 === "3") {
        alert("Three")

    } else if (number1 === "4") {
        alert("Four");

    } else if (number1 === "5") {
        alert("Five");

    } else {
        alert("Enter valid number");
    }
}

// question 10

function que10() {
    var number2 = prompt("Enter between 1 to 10, 11 to 20,21 to 30....50");

    if (number2 >= 1 && number2 <= 10) {
        alert("The number is between 1 and 10");

    } else if (number2 >= 11 && number2 <= 20) {
        alert("The number is between 11 and 20");

    } else if (number2 >= 21 && number2 <= 30) {
        alert("The number is between 21 and 30");

    } else if (number2 >= 31 && number2 <= 40) {
        alert("The number is between 31 and 40");

    } else if (number2 >= 41 && number2 <= 50) {
        alert("The number is between 41 to 50");
    }
}

// question 11

function que11() {
    var number3 = prompt("Enter the number between 50 to 200");

    if (number3 <= 50 && number3 <= 200) {
        alert("The number is valid Number");

    } else if (number3 >= 50 && number3 <= 200) {
        alert("This is good number");

    } else {
        alert("It is invalide number");
    }
}

// question 12

function que12() {
    var number4 = prompt('enter a number in string One to Four');

    if (number4 == "One") {
        alert("1");

    } else if (number4 == "Two") {
        alert("2");

    } else if (number4 == "Three") {
        alert("3");

    } else if (number4 == "Four") {
        alert("4");

    } else {
        alert("Enter valid Number");
    }
}

// question 13

function que13() {
    var number5 = prompt("Enter number Six to Ten");

    if (number5 === "Six") {
        alert("plese enter a proper number");

    } else if (number5 === "seven") {
        alert("Plese enter a proper number");

    } else if (number5 === "Eight") {
        alert("Plese enter a proper number");

    } else if (number5 === "Nine") {
        alert("plese enter a proper number");

    } else if (number5 === "Ten") {
        alert("plese enter a proper number");

    } else {
        alert("Plese enter a valid number");
    }
}

//question 14

function que14(){
	var num = prompt("Enter a number");

	if(num%2==0)
	{	
		num=parseInt(num);
		console.log(num+" is an even number.");
		console.log("Next 10 even numbers after "+num+" are:");
		for(var i=+1;i<=10;i++)
		{
			num+=2;
			console.log(num);
		}
	}
	else if(num%2==1)
	{
		num=parseInt(num);
		console.log(num+" is an odd number.");
		console.log("Next 10 odd numbers after "+num+" are:");
		for(var i=1;i<=10;i++)
		{
			num+=2;
			console.log(num);
		}
	}
}

// question 15

function que15() {
    var number7 = prompt("Enter numbe any number");

    if(number7 %2 == 0) {
        number7 = parseInt(number7);
        console.log(number7+ "is even number");
        console.log("previous 5 even number after " +number7);

        for(var i =+1;i<=5;i++) {
            number7-=2;
            console.log(number7);
            alert("previous 5 even number " +number7);
        }

    } else if(number7%2 == 1) {
        
        
        number7 = parseInt(number7);
        console.log(number7+ "is an odd number");
        console.log("previous 5 number after " +number7+ "are");

        for(var i =+1;i<=5;i++) {
            number7-=2;
            console.log(number7);
            alert("previous 5 odd number " + number7);
        }
    }
}



