function imgAuto() {
    var img = document.getElementById("image");
    var i = 0;
    var imageArray = ['image3.jpg','image2.jpg','male2.jpg','image12.jpg'];

    setInterval(function (){
        img.src = imageArray[i];
        i++;

        if(i>=imageArray.length) {
            i=0;
        }
    },1000);
}

// question 2

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
];

function quotesAuto() {
    var i = 0;
    var quotesshow = document.getElementById("quote");

    setInterval(function () {
        quotesshow.textContent = quotes[i];
        console.log(quotesshow.textContent);
        i++;

        if(i>=quotes.length) {
            i=0;
        }
    },1000);
}

// question 3


function quoteRandom() {
    var quotesshow = document.getElementById("random-quote");

    setInterval(function () {
        quotesshow.textContent = quotes[Math.floor(Math.random()*quotes.length)];
        console.log(quotesshow.textContent);
    },1000);
}
