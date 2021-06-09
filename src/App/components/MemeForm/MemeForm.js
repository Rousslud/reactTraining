import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import { REST_ADR_SRV } from '../../config/config';

const MemeForm = (props) => {
  const [state, setstate] = useState({ titre: 'bla', x: 10, y: 20, text: 'coucou', imageId: 1, color: '#000000', fontSize: 15 });
  useEffect(() => {
    // appel de la fonction envoyée par les props
    props.onSubmit(state);
  }, [state]);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt) => {
        // Annulation du comportement par défaut de la soumission d'un formulaire
        evt.preventDefault();
        fetch(`${REST_ADR_SRV}/memes${state.id ? '/' + state.id : ''}`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: (state.id ? 'PUT' : 'POST'),
          body: JSON.stringify(state)
        })
          .then(flux => flux.json())
          .then(obj => { setstate(obj) })
      }}>
        <label htmlFor="titre">Titre</label><br /><input onChange={evt => {
          setstate({ ...state, titre: evt.target.value })
        }} value={state.titre} type="text" id="titre" placeholder="saisissez le titre"></input>
        <hr />

        <label htmlFor="image">Image</label><br /><select onChange={evt => {
          setstate({ ...state, imageId: Number(evt.target.value) })
        }} value={state.imageId} id="image">
          {
            props.images.map((element, index) => <option value={element.id} key={"option-image-" + index}>{element.title}</option>)
          }
        </select>
        <hr />

        <div style={{ display: 'inline-block' }}><label htmlFor="text">Texte</label><br /><input onChange={evt => {
          setstate({ ...state, text: evt.target.value })
        }} value={state.text} type="text" id="text" placeholder="Mon texte"></input></div>

        <div style={{ display: 'inline-block' }}>
          <label htmlFor="fontSize">Font-size</label><br /><input onChange={evt => {
            setstate({ ...state, fontSize: Number(evt.target.value) })
          }} value={state.fontSize} type="number" id="fontSize" placeholder="10"></input></div>

        <div style={{ display: 'inline-block' }}><label htmlFor="color">Color</label><br /><input onChange={evt => {
          setstate({ ...state, color: evt.target.value })
        }} value={state.color} type="color" id="color"></input></div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block' }}><label htmlFor="x">X</label><br /><input onChange={evt => {
            setstate({ ...state, x: evt.target.value })
          }} value={state.x} type="number" id="x"></input></div>
          <div style={{ display: 'inline-block' }}><label htmlFor="y">Y</label><br /><input onChange={evt => {
            setstate({ ...state, y: evt.target.value })
          }} value={state.y} type="number" id="y"></input></div>
        </div>
        <hr />
        <input type="submit" value="Save"></input>
        <input type="reset" value="Reset"></input>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
};

MemeForm.defaultProps = {};

export default MemeForm;
