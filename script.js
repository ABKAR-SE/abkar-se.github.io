document.addEventListener("DOMContentLoaded", function() {
    var stripeButton = document.getElementById("stripeButton");

    // Aggiungi l'evento di click al pulsante di Stripe
    stripeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Impedisce il comportamento predefinito del link
        openStripeWindow(stripeButton.href);
    });

    // Funzione per aprire una finestra di Stripe
    function openStripeWindow(url) {
        var newWindow = window.open(url, "_blank");
        if (newWindow) {
            newWindow.opener = null; // Impedisce al nuovo popup di accedere all'opener (questa finestra)
        } else {
            // Fallback per i browser che bloccano la finestra pop-up
            window.location.href = url;
        }
    }
});
