//question 1

var quotes = [
    "'Don't cry because it's over, smile because it happened.'",
    "'Be yourself; everyone else is already taken.'",
    "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
    "'Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.'",
    "'A room without books is like a body without a soul.'",
    "'You only live once, but if you do it right, once is enough.'",
    "'Be the change that you wish to see in the world.'",
    "'In three words I can sum up everything I've learned about life: it goes on.'",
    "'Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
    "'No one can make you feel inferior without your consent.'"
]
function displayQutes() {
    console.log("****quotes*****");

    counter = 1;
    for (var i = 0;i<quotes.length;i++) {
        console.log("quote " +counter+" : "+quotes[i]);
        counter++;
    }
}

// question 2

function que2() {
    var param = quotes;
    alert("length of array is: "+param.length);
    console.log("length of array is: " +param.length);
    counter=4;

    for(var i = 3;i<param.length;i++) {
        console.log("Quote "+counter+": "+param[i]);
        counter++;
    }
}

// question 3

function que3() {
    displayQutes();
    console.log("performing pop() function ");

    quotes.pop();
    console.log("now length of array is:" +quotes.length);
    console.log("πππpoped array");
    counter =1;
    for(var i = 0;i<quotes.length;i++) {
        console.log("quotes" +counter+ ": "+quotes[i]);
        counter--;
    }

    console.log("performing reverse() function");

    quotes.reverse();
    console.log("now lenght of array is:" +quotes.length);
    console.log("ππππreverse array");
    counter = quotes.length;

    for(var i = 0;i<quotes.length;i++) {
        console.log("quote " +counter+ ": "+quotes[i]);
        counter--;
    }

    console.log("****8th array element****");
	console.log("Quote : "+quotes[7]);

	console.log("****Performing 'shift()' method on above generated ARRAY****");
	quotes.shift();
	console.log("Now length of Array is:"+quotes.length);
	console.log("****SHIFTED ARRAY****");
	counter = quotes.length;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter--;
	}

	console.log("****Performing 'sort()' method on above generated ARRAY****");
	quotes.sort();
	console.log("****SORTED ARRAY****");
	counter = 1;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter++;
	}
}


// question 4

function que4() {
    var arr = prompt("Enter any number with some space");
    var res = arr.split(" ");
    console.log("Array is : ["+ res +"]");
    console.log("length of array is :"+res.length);

    console.log("push 12 method on array");
    res.push("12");
    console.log("now the length of array is: "+res.length);
    console.log("Array : "+res);

    console.log('Performing unshift("r") method on array');
	res.unshift("r");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing splice(4,0,"a","b") method on array');
	res.splice(4,0,"a","b");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);	

	console.log('Performing slice(3,6) method on array');
	var sl = res.slice(3,6);
	console.log("Now the length of array is: "+sl.length);
	console.log("Array: "+sl);	
}


// question 5

function que5() {
    var month = prompt["Jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"];
    
    console.log("Array is:" +month);
    month.pop();
    console.log("now length of array is:" +month.length);
    console.log("****poped Array*****");
    counter = 1;

    for(var i =0;i<month.length;i++) {
        console.log("quote" +counter+" :"+month[i]);
        counter--;

    }

    console.log("*****performing 'reverse()' method on above generated barray");
    month.reverse();
    console.log("*****reverse array******");
    counter = month.length;
    for(var i = 0;i<month.length;i++) {
        console.log("quotes" +counter+ ": "+month[i]);
        counter--;
    }

    console.log("****8th array element****");
	console.log("Quote : "+quotes[7]);

	console.log("****Performing 'shift()' method on above generated ARRAY****");
	quotes.shift();
	console.log("Now length of Array is:"+quotes.length);
	console.log("****SHIFTED ARRAY****");
	counter = quotes.length;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter--;
	}

    console.log("****Performing 'sort()' method on above generated ARRAY****");
	quotes.sort();
	console.log("****SORTED ARRAY****");
	counter = 1;
	for(var i=0;i<quotes.length;i++)
	{
		console.log("Quote "+counter+": "+quotes[i]);
		counter++;
	}

    var arr = prompt("Enter few numbers with space between them!"); 
	var res = arr.split(" ");
	console.log("Array is: "+res);
	console.log("Length of Array is: "+res.length);
	
	console.log('Performing push("12") method on array');
	res.push("12");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing unshift("r") method on array');
	res.unshift("r");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);

	console.log('Performing splice(4,0,"a","b") method on array');
	res.splice(4,0,"a","b");
	console.log("Now the length of array is: "+res.length);
	console.log("Array: "+res);	

	console.log('Performing slice(3,6) method on array');
	var sl = res.slice(3,9);
	console.log("Now the length of array is: "+sl.length);
	console.log("Array: "+sl);


	console.log("***THREE GENERATED ARRAYS***");
	console.log("Array 1: "+month);
	console.log("Array 2: "+sl);

	console.log("Performing concat() method on these two generated Arrays");
	var finalArray = month.concat(sl);

	pointer = 0;
	for(var i=0;i<finalArray.length;i++)
	{
		console.log("Index "+pointer+": "+finalArray[i]);
		pointer++;
	}
}

//Question 6
function que6(){
	var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	console.log("Declared array is : ["+days+"]");
	console.log("******print array indiviudually********");
	counter = 0;
	for(var i=0;i<days.length;i++) {
		console.log("Index" +counter+ ": "+days[i]);
		counter++;
	}
}

// question 7

function que7() {
	var weekday = ["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];
	var day = prompt("enter any day");

	switch(day.toLowerCase()) {
		case "monday":
			console.log(weekday.slice(1));
			break;
		case "tuesday":
			console.log(weekday.slice(2));
			break;
		case "wednesday":
			console.log(weekday.slice(3));
			break;
		case "thrusday":
			console.log(weekday.slice(4));
			break;
		case "friday":
			console.log(weekday.slice(5));
			break;
		case "saturday":
			console.log(weekday.slice(6));
			break;
		case "sunday":
			console.log(weekday.slice(7));
			break;
		default:
			console.log("enter valide week day");
	}
}

// question 8

function que8() {
	var weekday1 = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
	var day1 = prompt("Enter any week day");

	switch(day1.toLowerCase()) {
		case "monday":
			console.log(weekday1.slice(1)+","+weekday1.slice(0,1));
			break;
		case "tuesday":
			console.log(weekday1.slice(2)+","+weekday1.slice(0,2));
			break;
		case "wednesday":
			console.log(weekday1.slice(3)+","+weekday1.slice(0,3));
			break;
		case "thrusday":
			console.log(weekday1.slice(4)+","+weekday1.slice(0,4));
			break;
		case "friday":
			console.log(weekday1.slice(5)+","+weekday1.slice(0,5));
			break;
		case "saturday":
			console.log(weekday1.slice(6)+","+weekday1.slice(0,6));
			break;
		case "sunday":
			console.log(weekday1.slice(7)+","+weekday1.slice(0,7));
			break;
		default:
			console.log("Enter a valide week day");
	}
}

// question 9

function que9() {
	var match = ["mit","soham","het","dhruvil","priyank"];
	var name = prompt("Enter any name");

	if(match == "mit","soham","het","dhruvil","priyank") {
		alert("match");
	} else {
		alert("unmatch");
	}
}




