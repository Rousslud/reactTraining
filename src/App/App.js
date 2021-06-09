import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import { REST_ADR_SRV } from "./config/config.js";

/**
 * Composant principal de notre application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: { titre: '', x: 0, y: 0, text: '', image: 0 }, images:[] };
  }
  componentDidUpdate(pprops, pstate) {
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return <div className="App">
      <FlexLayout>
        <div></div>
        <MemeForm images={this.state.images} onSubmit={formState => this.setState({ current: formState })}></MemeForm>
      </FlexLayout>
      {JSON.stringify(this.state)}
    </div>;
  }
  componentDidMount() {
    fetch(`${REST_ADR_SRV}/images`)
      .then(flux => flux.json())
      .then(arr => this.setState({ images: arr }))
  }
}
export default App;