import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <>
        <article>
          <h3>{this.props.name}</h3>
        <p>Horn Shape: {this.props.hornShape}</p>
          <p>Common: {this.props.common}</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;