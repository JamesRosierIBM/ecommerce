import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor () {
    super();
    
    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromError(error) {
    //let react know an error is being thrown
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //process the error somehow
    console.log(error)
  }

  render() {
    if(this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/flHudHE.png'>
          </ErrorImageContainer>
          <ErrorImageText>You bought a little bracelet for the express purpose of not losing your keys. You put a hook on your door specifically meant for keeping your keys. You briefly attempted to attach your keys to your phone. But here they are. In the dirt. In the park across the street from that bar you used to like but decided the last time you went that you probably wouldn’t go again. You’ll never find them.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;