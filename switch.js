function que1 () {
    var age = prompt("Enter Your age Ex : 14,21,40,55");

    switch(age) {
        case "14":
            alert("Coupon 1");
            break;
        case "21":
            alert("Coupon 2");
            break;
        case "40":
            alert("Coupon 3");
            break;
        case "55":
            alert("Coupon 4");
            break;
        default:
            alert("No Coupon");
    }
}

//Question 2

function que2 () {
    var day = prompt("Enter a Day");

    switch(day) {
        case "Monday":
            alert("Monday, We serve Pasta");
            break;
        case "Tuesday":
            alert("Tuesday, We serve Pizza");
            break;
        case "Wednesday":
            alert("Wednesday, We serve Maggi");
            break;
        case "Thrusday":
            alert("Thursday, We serve Mango");
            break;
        case "Friday":
            alert("Friday, We serve banana");
            break;
        case "Saturday":
            alert("Saturday, We serve Orange");
            break;
        case "Sunday":
            alert("Sunday, We serve Full dish");
            break;
        default:
            alert("Enter valid day");
    }
}

//Question 3

function que3 () {
    var year = prompt("Enter Year between 2011 to 2018");

    switch(year) {
        case "2011":
            alert("won the Oscar 1");
            break;
        case "2012":
            alert("won the Oscar 2");
            break;
        case "2013":
            alert("won the Oscar 3");
            break;
        case "2014":
            alert("won the Oscar 4");
            break;
        case "2015":
            alert("won the Oscar 5");
            break;
        case "2016":
            alert("won the Oscar 6");
            break;
        case "2017":
            alert("won the Oscar 7");
            break;
        case "2018":
            alert("won the Oscar 8");
            break;
        default:
            alert("Enter a valid year")
    }
}

//question 4

function que4 () {
    var grade = prompt("Enter a grade (A+, A, A-, B)");

    switch(grade) {
        case "A+":
            alert("Excellent😎🎉");
            break;
        case "A":
            alert("Good Job😍");
            break;
        case "A-":
            alert("Good🤧");
            break;
        case "B":
            alert("Average😌");
            break;
        default:
            alert("Enter a valid Grade👀");
    }
}