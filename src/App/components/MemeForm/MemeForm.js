import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = (props) => {
  const [state, setstate] = useState({ titre: 'bla', x: 10, y: 20, text: 'coucou', image: 1 })

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form>
        <label htmlFor="titre">Titre</label><br /><input onChange={evt=>{
          setstate({...state, titre:evt.target.value})
        }} value={state.titre} type="text" id="titre" placeholder="saisissez le titre"></input>
        <hr />
        <label htmlFor="image">Image</label><br /><select onChange={evt=>{
          setstate({...state, image:evt.target.value})
        }} value={state.image} id="image"><option value="1">img.jpg</option></select>
        <hr />
        <label htmlFor="text">Texte</label><br /><input onChange={evt=>{
          setstate({...state, text:evt.target.value})
        }} value={state.text} type="text" id="text" placeholder="Mon texte"></input>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}><label htmlFor="x">X</label><br /><input onChange={evt=>{
          setstate({...state, x:evt.target.value})
        }} value={state.x} type="number" id="x"></input></div>
          <div style={{ display: 'inline-block' }}><label htmlFor="y">Y</label><br /><input onChange={evt=>{
          setstate({...state, y:evt.target.value})
        }} value={state.y} type="number" id="y"></input></div>
        </div>
        <hr />
        <input type="submit" value="Save"></input>
        <input type="reset" value="Reset"></input>
      </form>
      {JSON.stringify(state)}
    </div>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
