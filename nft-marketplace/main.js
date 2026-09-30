const connectWallet =
    document.getElementById("connectWallet");

const walletModal =
    document.getElementById("walletModal");

const closeModal =
    document.getElementById("closeModal");


/* OPEN WALLET */

connectWallet.addEventListener("click", function () {

    walletModal.classList.add("show");

});


/* CLOSE WALLET */

closeModal.addEventListener("click", function () {

    walletModal.classList.remove("show");

});


/* CLOSE WHEN CLICKING OUTSIDE */

walletModal.addEventListener("click", function (event) {

    if (event.target === walletModal) {

        walletModal.classList.remove("show");

    }

});