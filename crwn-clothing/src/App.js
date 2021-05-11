import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import Homepage from './pages/homepage/homepage-component.jsx';
import ShopPage from './pages/shop/shop-component.jsx'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-component.jsx';
import Header from './components/header/header-component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // checks if user is authorized
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // firebase has a snapshot function to access info
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' 
          render={() => 
            this.props.currentUser ? (
            <Redirect to='/'/>
            ) : (
            <SignInAndSignUpPage />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

//this is the payload that reducers need
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
