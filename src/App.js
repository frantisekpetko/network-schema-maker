import React, { Component } from 'react';
import EditorRoot from './EditorRoot/EditorRoot';
import Preloader from './Preloader';
import './App.css';


class App extends Component {

  state = {
    loading: true,

  };

  componentDidMount() {
    setInterval( () => {
      this.setState({loading: false});
    },1500)
  }

  render() {
    const {loading} = this.state;

    return (
      <div>
        {loading ? <Preloader/> : <EditorRoot/>}
      </div>
    );
  }
}

export default App;
