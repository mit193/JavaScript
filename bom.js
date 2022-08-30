function que1() {
    var p = document.getElementById("app-name");

    p.innerHTML = "brouser : " +"<strong>"+navigator.appCodeName+"</strong>";
}

// question 2

function que2(){
    var os = document.getElementById("os-name");

    os.innerHTML = "you are using :" +navigator.platform + "Oprating System"

    if(navigator.platform !== "Mac") {
        
        alert("you should use Mac Os");
    }
}