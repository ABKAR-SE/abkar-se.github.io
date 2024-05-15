function openStripeWindow(url) {
    console.log("Apertura finestra di Stripe:", url);
    var newWindow = window.open(url, "_blank");
    if (newWindow) {
        newWindow.opener = null;
    } else {
        window.location.href = url;
    }
}
