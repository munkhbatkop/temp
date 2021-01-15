import React from 'react';

import hearts from "./hearts.png";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h4>You are running the app in {window.development ? "development" : "production"}</h4>
        <img src={hearts} alt=""/>
      </div>
    );
  }
}


export default Welcome;