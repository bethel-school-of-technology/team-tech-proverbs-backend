/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
    // 1) Get checkout session from API
    const stripe = Stripe(
      'pk_test_51OM5FpK8Y38abCgkolohUFgHrwNM0YNiukVlk1pN5pH16ixzxgxwRjyhuXcRXDI2GbJ2g1cIiVFGjQtFUW9jMazx00rLK5TzEU'
    );
    try {
        const session = await axios(
          `http://127.0.0.1:3004/api/v1/bookings/checkout-session/${tourId}`
        );
        console.log(session);

        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }

};
