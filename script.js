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
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2)
}

// Helper function to calculate tip based on bill amount and service quality

function calculateTip(bill, quality){
    if(quality === 'Great'){
        return bill * .2
    } else if (quality === 'Good'){
        return bill * .15
    } else {
        return bill * .10
    }
}

function calculateTotalBill(bill, tip){
    return bill + tip
}

function calcAmtPerPers(totalBill, numOfPeople){
    return totalBill / numOfPeople
}