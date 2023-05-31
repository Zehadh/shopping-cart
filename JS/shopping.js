function noOfPhone(isIncrease, phoneQuantity) {
    const Quantity = document.getElementById(phoneQuantity);
    const QuantityString = Quantity.value;
    const amount = parseFloat(QuantityString);
    if (isIncrease === false) {
        Quantity.value = amount - 1;
    }
    else {
        Quantity.value = amount + 1;
    }
    return Quantity.value;
}



function totalPhonePrice(number) {
    const phonePrice = document.getElementById("phone-price");
    phonePrice.innerText = 1219 * number;
    return phonePrice.innerText;
}


function totalCasePrice(number) {
    const phonePrice = document.getElementById("case-price");
    phonePrice.innerText = 59 * number;
}


function getSubTotal() {
    const caseItem = document.getElementById("case-price");
    const casePriceString = caseItem.innerText;
    const casePrice = parseInt(casePriceString);

    const phoneItem = document.getElementById("phone-price");
    const phonePriceString = phoneItem.innerText;
    const phonePrice = parseInt(phonePriceString);

    const subTotal = phonePrice + casePrice;
    const subTotalElement = document.getElementById("subtotal");
    subTotalElement.innerText = subTotal.toFixed(2);

    const taxAmount = subTotal * 0.05;
    const taxItem = document.getElementById("tax");
    taxItem.innerText = taxAmount.toFixed(2);

    const finalAmount = subTotal + taxAmount;
    const finalItem = document.getElementById("total");
    finalItem.innerText = finalAmount.toFixed(2);
}



document.getElementById("phone-minusBtn").addEventListener('click', function () {
    const phoneNum = noOfPhone(false, "no-of-phone");

    totalPhonePrice(phoneNum);

    getSubTotal();
})



document.getElementById("phone-plusBtn").addEventListener('click', function () {
    const phoneNum = noOfPhone(true, "no-of-phone");

    totalPhonePrice(phoneNum);

    getSubTotal();
})



document.getElementById("case-minusBtn").addEventListener('click', function () {
    const caseNum = noOfPhone(false, "no-of-case");

    totalCasePrice(caseNum);

    getSubTotal();
})


document.getElementById("case-plusBtn").addEventListener('click', function () {
    const caseNum = noOfPhone(true, "no-of-case");

    totalCasePrice(caseNum);

    getSubTotal();
})


document.getElementById("caseCross").addEventListener('click', function () {
    const phoneNumber = document.getElementById("no-of-case");
    const phone = phoneNumber.value;
    phoneNumber.value = 0;

    const phoneAmount = document.getElementById("case-price");
    const phoneprice = phoneAmount.innerText;
    phoneAmount.innerText = 0;

    getSubTotal();
})

document.getElementById("phoneCross").addEventListener('click', function () {
    const phoneNumber = document.getElementById("no-of-phone");
    const phone = phoneNumber.value;
    phoneNumber.value = 0;

    const phoneAmount = document.getElementById("phone-price");
    const phoneprice = phoneAmount.innerText;
    phoneAmount.innerText = 0;

    getSubTotal();
})