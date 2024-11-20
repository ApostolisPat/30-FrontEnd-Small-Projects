const btnEl = document.getElementById("calculate");
const tipEl = document.getElementById("tip");
const billEl = document.getElementById("bill");
const totalEl = document.getElementById("total");

function calculateTotal(){
    const billValue = billEl.value;
    const tipValue = tipEl.value;
    const totalValue = (billValue * (1+tipValue/100)).toFixed(2);

    totalEl.innerText = totalValue;
    
}

btnEl.addEventListener("click", calculateTotal);