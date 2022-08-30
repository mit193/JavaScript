//question 1
function que1() {
    var age = prompt("enter your age");

    if(age <= 14 || age >= 65) {
        alert("Not allowed!");
        console.log("mit");
    }
    else if (age == 50) {
        alert("Special Whoo! you get Special discount :");

    } 
    else if (age > 14 && age < 65) {
        alert("Regular price!")

    }
    else {
        alert("Nothing");
    }
}

//Question 2
function que2() {
    var age2 = prompt("Enter your age");

    if(age2 == 14) {
        alert("Coupon 1");
        
    } 
    else if (age2 == 21) {
        alert("Coupon 2");

    } 
    else if (age2 == 30) {
        alert("coupon 3");

    }
    else if (age2 == 50) {
        alert("Coupon 4");

    }
    else {
        alert("No Coupon");
    }
}

//question 3

function WeekDay() {
    var day = prompt("Enter a day");

    if(day === "Monday"){
        alert("Mondays, We serve Pasta");

    } 
    else if (day === "Tuesday") {
        alert("Tuesday, We serve Tacos");

    } 
    else if (day === "Wednesday") {
        alert("Wednesday, We serve Pizza");

    } 
    else if (day === "Thursday") {
        alert("Thursday, We serve Mango");

    } 
    else if (day === "Friday") {
        alert("Friday, we serve Banana");

    } 
    else if (day === "Saturday") {
        alert("Saturday, We serve Orange");

    } 
    else {
        alert("Today is off day");
    }
}

//Question 4

function MovieOscars () {
    var year = prompt("Enter a year Between 2003 to 2012");

    if(year == 2003) {
        alert("Movie1 , won oscor");

    } 
    else if (year == 2004) {
        alert("Movie2, Won oscor");

    } 
    else if (year == 2005) {
        alert("Movie3, Won oscor");

    } 
    else if (year == 2006) {
        alert("Movie4, Won oscor");

    } 
    else if (year == 2007) {
        alert("Movie5, Won Oscor");

    } 
    else if (year == 2008) {
        alert("Movie6< Won oscor");

    }
    else if (year == 2009) {
        alert("Movie7, Won oscor");

    }
    else if (year == 2010) {
        alert("Movie8, Won oscor");

    } 
    else if (year == 2011) {
        alert("Movie9, Won oscor");

    }
    else if (year == 2012) {
        alert("Movie10, Won oscor");

    }
    else {
        alert("Enter valid day");
    }
}

//Question 5

function studentGrade() {
    var grade = prompt("Enter your grade from e A+, A, A-, B");

    if(grade === "A+") {
        alert("Excellent😎");

    } else if (grade === "A") {
        alert("Good Job🤧");
         
    } else if (grade === "A-") {
        alert("Good😌");

    } else if (grade === "B") {
        alert("Average😢");
    } else {
        alert("Enter valide Grade");
    }
}
