import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';


class Main extends React.Component {

  render() {
    return (
      <>
      <div className="mainBeast">
        {
          this.props.beasts.map((beasts, idx) => (
            <HornedBeast
            handleOpenModal={() => this.props.handleOpenModal(beasts)}
            key={idx}
            _id= {beasts._id}
            image_url= {beasts.image_url}
            title= {beasts.title}
            description= {beasts.description}
            keyword= {beasts.keyword}
            horns= {beasts.horns}

            />
          ))
        }
      </div>
      </>
    )
  }
}


export default Main;
