import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {

  render() {
    return (
      <>
        {
          data.map((beast) => (
            <HornedBeast
            _id= {beast._id}
            image_url= {beast.image_url}
            title= {beast.title}
            description= {beast.description}
            keyword= {beast.keyword}
            horns= {beast.horns}
            />
          ))
        }
      
      </>
    )
  }
}


export default Main;
