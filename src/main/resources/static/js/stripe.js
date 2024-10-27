const stripe = Stripe('pk_test_51QDPTjAQmlhQgMnzblv2HvF6MqFf6vGN2uvSHXJR6HlNtX8BWsJ94JCcrMjuAdgctPDgBkxJex8ahFBepQXLd43Z00T0JvkrGK');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});