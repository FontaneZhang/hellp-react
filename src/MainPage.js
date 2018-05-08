import React, { Component } from 'react';
import GrandPa from './GrandPa';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
                <HeaderOne/>
                <HeaderTwo/>
                <GrandPa name={"dd"} age={12}>
                    <p>I am a child.</p>
                </GrandPa>
            </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
