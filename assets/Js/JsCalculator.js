
$(document).ready(function() {

    var totalBillDiv = $("#totalBillLbl");      

    $("#calBtn").on("click", function() {
        console.log("Clicked!")
        var testDiv = document.createElement("p");
        newDrinkP.textContent = "Test";
        totalBillDiv.append(newDrinkPs);    
    });
});