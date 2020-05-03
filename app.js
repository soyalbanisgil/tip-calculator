document.getElementById('calculate').addEventListener('submit', calculateTip);

function calculateTip(e) {
    e.preventDefault();

    const billAmount = document.getElementById('billAmount').value;
    const serviceQual = document.getElementById('serviceQual').value;
    const pplNum = document.getElementById('pplNum').value;

    if((billAmount == "") && (pplNum == "")) {
        alert("Please fill the form")
    } else if (billAmount <= 0 || pplNum <= 0) {
        alert("Please enter a valid amount or number of people")
    } else  {
        let totalTip = (billAmount * serviceQual) / pplNum;

        let total = totalTip.toFixed(2)
        
        document.getElementById('total').innerHTML = `
        <h3>TOTAL TIP = $${totalTip} each.</h3>
        `
    }
}