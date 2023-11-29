import Tax from "./Tax.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(() => {

    
    var incomeInput = document.getElementById("cost");
    incomeInput.addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            $("#paidTax").focus();
        }
    });

    var taxInput = document.getElementById("paidTax");
    taxInput.addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            $("#cal").click();
        }
    });
    $("#cal").click((evt) => {
        evt.preventDefault();

      
        const nAmount = $("#cost").val();
        const nPaidTax = $("#paidTax").val();
        const oHst = new Tax();
        $("#amount").html(nAmount);

      
        var values = oHst.cal(nAmount, nPaidTax);
        $("#OntTax").html(values[0]);
        $("#FedTax").html(values[1]);
        $("#TotTax").html(values[2]);
        $("#OwTax").html(values[3]);
    })
});

