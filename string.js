// question 1,2,3

function que1() {
    alert('Output of "3"+5+6 is :' +("3"+5+6));
    alert('Output of 3+”5”+6 is :' +(3+"5"+6));
    alert('Output of 3+5+"6" is :' +(3+5+"6"));
}

//question 4,5,6

function que2() {
    var str = ("Pneumonoultramicroscopicsilicovolcanoconiosis");
    alert("Pneumonoultramicroscopicsilicovolcanoconiosis" +str.length);
    alert("Pneumonoultramicroscopicsilicovolcanoconiosis"+str.toUpperCase);
    alert("Pneumonoultramicroscopicsilicovolcanoconiosis"+str.toLowerCase);
}

//question 7

function que7() {
    var str = "I like this product;I hate this product;This product is worth buying;I dont agree with above the user"

    console.log("I like this product;I hate this product;This product is worth buying;I dont agree with above the user");

    var cut = str.split(';');
    console.log("*****Broken String*****");

    for(var i = 0;i<cut.length;i++) {
        console.log(cut[i].trim());
    }
}

// question 8

function que8() {
    var str = "I like this product;I hate this product;This product is worth buying;I dont agree with above the user"
    var count = str.match(/o/g).length;
    console.log("I like this product;I hate this product;This product is worth buying;I dont agree with above the user")

    console.log("number of o appears is: "+count);
}

// question 9

function que9() {
    var str = "I like this product;I hate this product;"
    var rep = str.replace(/product/g,"javascript");
    console.log("String is : I like ths product;Ihate this product");
    console.log("Modified String :"+rep);

}

// question 10

function que10(){
	var str = " Javascript notation %^&* notes that structure rules and not context for nothing";
	var count = str.match(/not/gi).length;

	var str2 = 'Now, for the above problem, create an array with texts before and after "not" occurrences';
	var count1 = str2.match(/not/gi).length

	console.log("STRING IS: 'Javascript notation %^&* notes that structure rules and not context for nothing'");
	console.log("Number of times 'not' appears is: "+count);

	console.log("STRING IS: 'Now, for the above problem, create an array with texts before and after \"not\" occurrences'");
	console.log("Number of times 'not' appears is: "+count1);
}

