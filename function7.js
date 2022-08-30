function withdrawMoney () {
    var amount = prompt("please enter the amount in multiples of 20 you want to withdraw");

    while(amount !== "exit" )
    {
        if (isNaN(amount)) {
            alert("please enter a valid number");
        } else {
            if(amount%20 === 0) {
                alert("your amount is ready!");
                var ans = prompt("Do you want to exit? 'y' or 'N'");

                if(ans == y) {
                    alert("ok , bye!");
                    return false;
                } else if (ans == "n") {
                    withdrawMoney();
					return true;
                }
            } else {
                alert("plese enter multiples of 20");
            } 
        }
        amount = prompt("Please enter the amount in multiples of 20 you want to withdraw");
    }
}
