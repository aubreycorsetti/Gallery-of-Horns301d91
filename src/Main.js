import React from 'react';
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Main.css';




class Main extends React.Component {

  render() {

    let beastArray = this.props.beasts.map(beasts => {
      return <HornedBeast
        handleOpenModal={() => this.props.handleOpenModal(beasts)}
        _id={beasts._id}
        title={beasts.title}
        image_url={beasts.image_url}
        horns={beasts.horns}
        keyword={beasts.keyword}
        description={beasts.description}
        key={beasts._id}
      />
    });



    return (
      <>
        <main>
          <Form id="form">
            <fieldset>
              <Form.Group className="beastHorn">
                <Form.Label id="labelForm" htmlFor="Select">Search by Number of Horns</Form.Label>
                <Form.Select id="Select" onChange={this.props.filter}>
                  <option>All</option>
                  <option value={1}>1 Horn</option>
                  <option value={2}>2 Horns</option>
                  <option value={3}>3 Horns</option>
                  <option value={100}>100 Horns</option>
                </Form.Select>
              </Form.Group>
            </fieldset>
          </Form>
          <article>
            {beastArray}
          </article>
        </main>
      </>
    )
  }
}
export default Main;
