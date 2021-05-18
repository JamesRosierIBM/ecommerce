import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IqfquBkXXUnZ1xnPxvOmnmhLqcMh2BFbCxCbAuTT5h5kkSMuyOpZfDKdf8u3QKEh8PP9vbVcFpWopeCR9lxTl3100CbDq4QBy';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      }
    }).then(res => {
      alert('Payment successful')
    }).catch(err => {
      console.log('Payment error:  ', JSON.parse(err));
      alert(
        'There was an issue with your payment. Please use the test credit card'
      )
    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
