function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value;
    interestRate = document.getElementById("interest-rate").value;
    monthToPay = document.getElementById("months-to-pay").value;
    
    interest = (loanAmount * (interestRate * 0.01)) / monthToPay;

    monthlyPayment = (loanAmount / monthToPay + interest).toFixed(2);/* toFixed to make it have 2 digits only */

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}