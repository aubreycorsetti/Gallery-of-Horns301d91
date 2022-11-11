import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      showModal: false,
      selectedBeast: null
    };
  }

  handleCloseModal = () => {
    console.log('hi');
    this.setState({
      showModal: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    });
  };

  render() {
    return (
      <>
      {
        this.state.selectedBeast &&
        <SelectedBeast
        showModal={this.state.showModal}
        handleCloseModal={this.handleCloseModal}
        selectedBeast={this.state.selectedBeast}
        />
      }
        <Header
        beasts={this.state.beasts}/>

        <Main
        beasts={this.state.beasts}
        handleOpenModal={this.handleOpenModal}
        // newData={this.state.beasts}
        />
        <Footer />

      </>
    );
  }
}

export default App;
