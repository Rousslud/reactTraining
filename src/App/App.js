import React from 'react';
import FlexLayout from './components/FlexLayout/FlexLayout';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import { REST_ADR_SRV } from "./config/config.js";
import store, { initialState } from './store/store';

/**
 * Composant principal de notre application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: initialState.current, images: [] };
  }
  componentDidUpdate(pprops, pstate) {
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return <div className="App">
      <FlexLayout>
        <div>
          <MemeViewer meme={{ ...this.state.current, image: this.state.images.find(e => e.id === this.state.current.imageId) }}></MemeViewer>
        </div>
        <MemeForm images={this.state.images} onSubmit={formState => this.setState({ current: formState })}></MemeForm>
      </FlexLayout>
    </div>;
  }
  componentDidMount() {
    this.setState({
      current: store.getState().current
    })
    store.subscribe(() => {
      this.setState({ current: store.getState().current })
    }
    );

    fetch(`${REST_ADR_SRV}/images`)
      .then(flux => flux.json())
      .then(arr => this.setState({ images: arr }))
  }
}
export default App;