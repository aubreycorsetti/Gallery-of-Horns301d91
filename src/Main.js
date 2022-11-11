import React from 'react';
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Main.css';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfHorns: 0,
      newData: this.props.beasts
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
      let update = this.props.data.filter(beast => {
        return beast.horns === this.state.numOfHorns;
      });
      this.setState({
        newData: update
      });
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      numOfHorns: parseInt(event.target.value)
    });
  }

  render() {

    let beastArray = this.state.newData.map(beasts => {

      return (
        <>
          <div className="mainBeast">
            {

              <HornedBeast
                handleOpenModal={() => this.props.handleOpenModal(beasts)}
                key={beasts._id}
                _id={beasts._id}
                image_url={beasts.image_url}
                title={beasts.title}
                description={beasts.description}
                keyword={beasts.keyword}
                horns={beasts.horns}
              />

            }
          </div>
        </>
      )

    });


    return (
      <>
      <main>
        <Form id="form" onSubmit={this.handleSubmit}>
          <fieldset>
            <Form.Group className="beastHorn">
              <Form.Label id="formLabel" htmlFor="Select">
                Search by Number of horns
                </Form.Label>
                <Form.Select id="Select" onChange={this.handleChange}>
                  <option value="all">All</option>
                  <option value="even">Even</option>
                  <option value="odd">Odd</option>
                </Form.Select>
                </Form.Group>
                <Button id="button" type="submit">Submit</Button>
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
