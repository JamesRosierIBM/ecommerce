import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    // begins our spinner
    dispatch(fetchCollectionsStart());
 
    collectionRef.get().then(snapshop =>  {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshop);
      //sends the payload of collectionsMap to redux
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(e => { dispatch(fetchCollectionsFailure(e.message))})
  }
};


