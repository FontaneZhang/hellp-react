import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GrandPa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
                {this.props.children}
            </div>
        </div>
        <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
                <div>your name is {this.props.name}, your age is {this.state.age}</div>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older1</button><br/><br/>
                <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older2</button>
            </div>
        </div>
      </div>
    );
  }
}

GrandPa.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.element.isRequired
}