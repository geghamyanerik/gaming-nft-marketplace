/* =========================
   WALLET
========================= */

const connectWallet =
    document.getElementById("connectWallet");

const walletModal =
    document.getElementById("walletModal");

const closeWalletModal =
    document.getElementById("closeWalletModal");


if (connectWallet) {

    connectWallet.addEventListener(
        "click",
        function () {

            walletModal.classList.add("show");

        }
    );

}


if (closeWalletModal) {

    closeWalletModal.addEventListener(
        "click",
        function () {

            walletModal.classList.remove("show");

        }
    );

}


/* =========================
   BUY
========================= */

const buyButton =
    document.getElementById("buyButton");

const buyModal =
    document.getElementById("buyModal");

const closeBuyModal =
    document.getElementById("closeBuyModal");


if (buyButton) {

    buyButton.addEventListener(
        "click",
        function () {

            buyModal.classList.add("show");

        }
    );

}


if (closeBuyModal) {

    closeBuyModal.addEventListener(
        "click",
        function () {

            buyModal.classList.remove("show");

        }
    );

}


/* =========================
   SELL
========================= */

const sellButton =
    document.getElementById("sellButton");

const sellModal =
    document.getElementById("sellModal");

const closeSellModal =
    document.getElementById("closeSellModal");


if (sellButton) {

    sellButton.addEventListener(
        "click",
        function () {

            sellModal.classList.add("show");

        }
    );

}


if (closeSellModal) {

    closeSellModal.addEventListener(
        "click",
        function () {

            sellModal.classList.remove("show");

        }
    );

}


/* =========================
   LIST FOR SALE
========================= */

const listButton =
    document.getElementById("listButton");


if (listButton) {

    listButton.addEventListener(
        "click",
        function () {

            alert(
                "Approve Marketplace to handle your NFT"
            );

        }
    );

}


/* =========================
   CLOSE MODALS
========================= */

window.addEventListener(
    "click",
    function (event) {

        if (
            event.target === buyModal
        ) {

            buyModal.classList.remove("show");

        }


        if (
            event.target === sellModal
        ) {

            sellModal.classList.remove("show");

        }


        if (
            event.target === walletModal
        ) {

            walletModal.classList.remove("show");

        }

    }
);