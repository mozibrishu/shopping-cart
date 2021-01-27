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

