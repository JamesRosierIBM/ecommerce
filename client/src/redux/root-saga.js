import {all, call} from 'redux-saga/effects'

import { fetchCollectionsStart } from './shop/shop-saga'
import { userSagas } from './user//user-sagas';
import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop-saga';

export default function* rootSaga() {
  // all allows us to run concurrently
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ])
}