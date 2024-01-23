//Function to calculate and display tip, total bill, and amount per person
function calculateAndDisplay(){
    // Get the value from the HTML form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPeople = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // calculate tip, total bill, and the amount each person owes

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calcAmtPerPers(totalBill, numOfPeople)

    // Display the Results in the Html

    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Tip: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Tip: $' + amtPerPers.toFixed(2)
}