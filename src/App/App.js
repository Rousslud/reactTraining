import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Bonjour les amis</h1>
      <p> Ceci est une application en React</p>
      <h2>Un autre exemple de titre</h2>
      <p>Avec un autre sous paragraphe</p>
      <hr/>
      <Button bgColor="green" fontColor="white" title="Mon bouton mouton">Test</Button>
      {/**Ceci est un commentaire*/}
      <Button bgColor="tomato" fontColor="white" title="Clique-moi d'sus !">Test</Button>
      <Button bgColor="skyblue" fontColor="white" title="Non ne me clique pas !">Test</Button>
      <Button isItalic={false} fontColor="black"><img src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-256.png" alt="click"/>Miaoouuu</Button>
    </div>
  );
}

export default App;
