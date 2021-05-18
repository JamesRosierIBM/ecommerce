import { takeLatest, call, put, all } from 'redux-saga/effects';


import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message))
  }
  // this is how it looks without saga:
    // collectionRef.get().then(snapshop =>  {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
    //   //sends the payload of collectionsMap to redux
    //   dispatch(fetchCollectionsSuccess(collectionsMap))
    // }).catch(e => { dispatch(fetchCollectionsFailure(e.message))})
}
// this saga will listen for ShopActionTypes, and when it detexts it, it will invoke fetchCollectionsAsync
export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  )
}

export function* shopSagas() {
  yield all([fetchCollectionsStart])
}