// Product Remove from Cart
document.getElementById("removePhone").addEventListener("click", function () {
    removeProductFromCart("phoneSection");
})
document.getElementById("removeCase").addEventListener("click", function () {
    removeProductFromCart("caseSection");
})
function removeProductFromCart(productSection) {
    document.getElementById(productSection).style.display = "none";
}



// Value Update
document.getElementById("phoneQuantityPlus").addEventListener("click", function () {
    updateProduct("phoneQuantity", 1, "phoneTotalAmount", 1219);
})
document.getElementById("phoneQuantityMinus").addEventListener("click", function () {
    if (getQuantity("phoneQuantity")) {
        updateProduct("phoneQuantity", -1, "phoneTotalAmount", -1219);
    }
})

document.getElementById("caseQuantityPlus").addEventListener("click", function () {
    updateProduct("caseQuantity", 1, "caseTotalAmount", 59);
})

document.getElementById("caseQuantityMinus").addEventListener("click", function () {
    if (getQuantity("caseQuantity")) {
        updateProduct("caseQuantity", -1, "caseTotalAmount", -59);
    }
})


function updateProduct(quantity, changeInQuantity, totalProductAmount, changeInAmount) {
    updateQuantity(quantity, changeInQuantity);
    updateAmount(totalProductAmount, changeInAmount);
    updateAmount("subTotalAmount", changeInAmount);
    updateAmount("totalAmount", changeInAmount);
}

function updateAmount(id, amount) {
    const newAmount = getAmount(id) + amount;
    document.getElementById(id).innerText = newAmount;
}

function updateQuantity(id, changeQuantity) {
    const newQuantity = getQuantity(id) + changeQuantity;
    document.getElementById(id).value = newQuantity;
}

function getQuantity(id) {
    return parseInt(document.getElementById(id).value);
}
function getAmount(id) {
    return parseFloat(document.getElementById(id).innerText);
}