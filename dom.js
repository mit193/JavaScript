// question 1

function que1() {
    var p1 = document.getElementById("para1");
    alert(p1.innerHTML);
}

// question 2

function que2() {
    var p2 = document.getElementById("para2");
    p2.style.background = "orange";
    p2.style.color = "red"
}

// question 3

function que3() {
    var textbox1 = document.getElementById("text1");
    var textbox2 = document.getElementById("text2");

    textbox1.value = textbox2.value;
}

// question 4

function que4a() {
    var image1 = document.getElementById("img1");
    image1.src = "image3.jpg";
}

function que4b() {
    var image2 = document.getElementById("img1");
    image2.style.visibility = "hidden";
}

function que4c() {
    var image3 = document.getElementById("img1");
    image3.style.visibility = "visible"
}

// question 5

var img4 = document.getElementById("image");
var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");

var i = 0;
var imgArray = ['image3.jpg','image12.jpg','male1.jpg','male2.jpg'];

function next() {
    if(i<imgArray.length-1) {
        i++;
    } else{
        i = 0;
    }
    img4.src= imgArray[i];
    console.log(i);
}

function prev() {
    if(i>0) {
        i--;
    } else {
        i = imgArray.length-1;
    }
    img4.src=imgArray[i];
    console.log(i);
}

