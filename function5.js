function checkAge () {
    
    var age = prompt("Enter your age");
    if(age <= 0) {
        alert("Ayy, you have to born first then come here to check price :");

    } else if (age <=2) {
        alert("No charge!");

    } else if (age > 2 & age < 14) {
        alert("10% discount!");

    } else if (age > 14 & age < 55) {
        alert("Regular price");

    }else 
        alert("20% discount");
}