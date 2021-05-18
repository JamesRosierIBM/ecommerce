// a wrapper for our collection, to keep our shop page dumb. we are passing the props here instead of in the shop
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage)

export default CollectionPageContainer;