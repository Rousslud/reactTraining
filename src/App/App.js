import React from 'react';
import Button from './components/Button/Button';
/**
 * Composant principal de notre application
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, machaine: 'Hello' };
  }
  componentDidUpdate() {
    console.log(arguments);
    console.log(this.state);
  }
  render() {
    return <div className="App">
      Notre compteur : {this.state.counter} {this.state.machaine};
      <Button bgColor="green" clickActionPerso={argument => {
        this.setState({ counter: this.state.counter + 1, machaine:(this.state.counter+1===2?'On a atteint 2':'Hello') })
        console.log("Depuis app : " + this.state.counter);
      }}>
        <img src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-256.png" alt="click" />Miaoouuu</Button>

    </div>;
  }
}
export default App;