import React from 'react';
import Icon from './icon';
import Menu from './menu';

class Logo extends React.Component {
  render() {
    return (
    <div>
      <h1 className="whattodo-logo"><a href="/"> What to Do? </a> {this.props.name}</h1>

    </div>
    );
  }
}

export default Logo;
