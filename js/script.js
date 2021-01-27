// Product Price and quantity
const PHONE_PRICE = 1219;
const CASE_PRICE = 59;
const QUANTITY = 1;
// Tax Percentage
const TAX = 10;
// initial Calculation
updateTaxAndTotalAmount();


// Product Remove from Cart
document.getElementById("removePhone").addEventListener("click", function () {
    removeProductFromCart("phoneSection", "phoneTotalAmount");
})
document.getElementById("removeCase").addEventListener("click", function () {
    removeProductFromCart("caseSection", "caseTotalAmount");
})

function removeProductFromCart(productSection, productTotalAmount) {
    document.getElementById(productSection).style.display = "none";
    updateAmountAfterProductRemove(productTotalAmount);
    updateTaxAndTotalAmount();
}
function updateAmountAfterProductRemove(id) {
    const amount = getAmount(id);
    updateAmount("subTotalAmount", -(amount));
}


// Tax and Total Calculation
function calculateTax() {
    const subTotalAmount = getAmount("subTotalAmount");
    const tax = (subTotalAmount / 100) * TAX;
    return parseFloat(tax.toFixed(2));
}

function updateTaxAndTotalAmount() {
    const tax = calculateTax();
    setAmount("taxAmount", tax);
    const totalAmount = getAmount("subTotalAmount") + tax;
    setAmount("totalAmount", totalAmount);
}


// Plus-Minus Value Update
document.getElementById("phoneQuantityPlus").addEventListener("click", function () {
    updateProduct("phoneQuantity", QUANTITY, "phoneTotalAmount", PHONE_PRICE);
})
document.getElementById("phoneQuantityMinus").addEventListener("click", function () {
    if (getQuantity("phoneQuantity")) {
        updateProduct("phoneQuantity", -(QUANTITY), "phoneTotalAmount", -(PHONE_PRICE));
    }
})

// Case Plus-Minus
document.getElementById("caseQuantityPlus").addEventListener("click", function () {
    updateProduct("caseQuantity", QUANTITY, "caseTotalAmount", CASE_PRICE);
})
document.getElementById("caseQuantityMinus").addEventListener("click", function () {
    if (getQuantity("caseQuantity")) {
        updateProduct("caseQuantity", -(QUANTITY), "caseTotalAmount", -(CASE_PRICE));
    }
})


// product value update
function updateProduct(quantity, changeInQuantity, totalProductAmount, changeInAmount) {
    updateQuantity(quantity, changeInQuantity);
    updateAmount(totalProductAmount, changeInAmount);
    updateAmount("subTotalAmount", changeInAmount);
    updateTaxAndTotalAmount();
}

function updateAmount(id, amount) {
    const newAmount = getAmount(id) + amount;
    document.getElementById(id).innerText = newAmount;
}

function updateQuantity(id, changeQuantity) {
    const newQuantity = getQuantity(id) + changeQuantity;
    document.getElementById(id).value = newQuantity;
}


// Get Set Method
function getQuantity(id) {
    return parseInt(document.getElementById(id).value);
}
function getAmount(id) {
    return parseFloat(document.getElementById(id).innerText);
}
function setAmount(id, amount) {
    document.getElementById(id).innerText = amount;
}