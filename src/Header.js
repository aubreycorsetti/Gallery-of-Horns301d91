import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
        <header>
          <h1>Gallery of Horns {this.props.hearts}</h1>
        </header>
    )
  }

}

export default Header;
