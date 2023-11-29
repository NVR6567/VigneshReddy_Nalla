export default class Tax {
    cal(amount, paidTax) {
        let otTax;
        let fdTax;
        let tax;
        let owTax;

        switch (true) {
            //Below is the ontario tax calculation
            case (amount <= 40922):
                otTax = ((amount - 0.00) * 0.0505) + 0.00;
                break;

            case (amount > 220000):
                otTax = ((amount - 220000) * 0.1316) + 21929.00;
                break;

            case (amount <= 81847 && amount > 40922):
                otTax = ((amount - 40922.00) * 0.0915) + 2067.00;
                break;

            case (amount <= 150000 && amount > 81847):
                otTax = ((amount - 81847.00) * 0.1116) + 5811.00;
                break;

            case (amount <= 220000 && amount > 150000):
                otTax = ((amount - 150000) * 0.1216) + 13417.00;
                break;

        }

        switch (true) {
            //Below is the federal tax calculation
            case (amount <= 45282):
                fdTax = ((amount - 0.00) * 0.15) + 0.00;
                break;

            case (amount > 200000):
                fdTax = ((amount - 200000) * 0.33) + 46317.00;
                break;

            case (amount <= 90563 && amount > 45282):
                fdTax = ((amount - 45282.00) * 0.205) + 6792.00;
                break;

            case (amount <= 140388 && amount > 90563):
                fdTax = ((amount - 90563.00) * 0.26) + 16075.00;
                break;

            case (amount <= 200000 && amount > 140388):
                fdTax = ((amount - 140388) * 0.29) + 29029.00;
                break;   
        }

        console.log(otTax);

        console.log(fdTax);

        tax = otTax + fdTax;
        owTax = tax - paidTax;

        return [otTax.toFixed(2), fdTax.toFixed(2), tax.toFixed(2), owTax.toFixed(2)];
    }
}
