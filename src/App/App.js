import './App.css';
import Button from './components/Button/Button';

function App() {
  let counter = 0;
  return (
    <div className="App">
      <h1>Bonjour les amis</h1>
      <p> Ceci est une application en React</p>
      <h2>Un autre exemple de titre</h2>
      <p>Avec un autre sous paragraphe</p>
      <hr />
      <Button bgColor="green" fontColor="white" title="Mon bouton mouton" clickActionPerso={myArg => {
        console.log("C'est mon app.js qui répond = " + myArg);
        counter++;
        console.log(counter);
      }}>Test</Button>
      {/**Ceci est un commentaire*/}
      <Button bgColor="tomato" fontColor="white" title="Clique-moi d'sus !" clickActionPerso={arg => { }}>Test</Button>
      <Button bgColor="skyblue" fontColor="white" title="Non ne me clique pas !" clickActionPerso={arg => { }}>Test</Button>
      <Button isItalic={false} fontColor="black" clickActionPerso={arg => { }}><img src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-256.png" alt="click" />Miaoouuu</Button>
      <hr/>
      Mon compteur = {counter} {/**Pour le moment le counter ne se met pas à jour malgré que la console s'affiche correctement. On verra demain comment mettre à jour l'état*/}
    </div>
  );
}

export default App;
