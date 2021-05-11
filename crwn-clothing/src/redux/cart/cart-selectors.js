
import { createSelector } from 'reselect';
// we will use createSelector to build a selector that is memoized
const selectCart = state => state.cart;
// const selectUser = state => state.users

export const selectCartItems = createSelector(
  //first param is an array, second is function
  //we could do [selectCart, selectUser], (cart, user) => (do something)
    [selectCart],
    (cart) => cart.cartItems
  );

  export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => 
      cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 0
    )
  )

  export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden,  
  )

  export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => 
    cartItems.reduce(
      (total, cartItem) => cartItem.price + cartItem.quantity, 0
    )
  )