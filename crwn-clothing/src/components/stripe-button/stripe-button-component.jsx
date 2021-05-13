import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IqfquBkXXUnZ1xnPxvOmnmhLqcMh2BFbCxCbAuTT5h5kkSMuyOpZfDKdf8u3QKEh8PP9vbVcFpWopeCR9lxTl3100CbDq4QBy'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  return (
    <StripeCheckout 
      stripeKey={publishableKey}
      amount={priceForStripe}
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
    />
  )
}

export default StripeCheckoutButton;