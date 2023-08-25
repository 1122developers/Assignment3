"use strict";
//a program that takes the number of units consumed by a user if
// it is greater than 100 then add 10% tax if greater than 200
//then add 15% of tax so on up to if greater than 500
//then add 25% of tax.
//Where the tax amount will be calculated by the amount of bill.
function bill(unitConsumed, unitrate) {
    var billAmount = (unitConsumed * unitrate);
    //console.log(billAmount)
    if (unitConsumed >= 100 && unitConsumed <= 200) {
        var tax1 = .1 * billAmount;
        var totalBill = billAmount + tax1;
        console.log("The Total bill with 10%Tax is =", totalBill);
    }
    else if (unitConsumed > 200 && unitConsumed <= 300) {
        var tax2 = .2 * billAmount;
        var totalBill2 = billAmount + tax2;
        console.log("The Total bill with 20% Tax is =", totalBill2);
    }
    else if (unitConsumed > 300) {
        var tax3 = .35 * billAmount;
        var totalBill3 = billAmount + tax3;
        console.log("The Total bill with 35% Tax is =", totalBill3);
    }
    else {
        console.log("The Total bill with outTax is =", billAmount);
    }
}
bill(90, 15);
bill(101, 15);
bill(301, 15);
