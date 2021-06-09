import React, {useState} from 'react';
import './Button.css';
import PropTypes from "prop-types";

function Button(props) {
	console.log(props)
	const[clicked, setClicked] = useState(false);
	return <button onClick={evt => {
		//alert('j\'ai cliqué sur ' + evt.target.innerText)
		console.warn(evt);
		props.clickActionPerso(evt.target.innerText);
		setClicked(true);
		// Remise à false de l'état cliqué du bouton au bout de 200ms
		setTimeout(()=>{setClicked(false)}, 200)
	}}
		className={"Button"+(clicked? ' clicked':'')}
		style={{ color: props.fontColor, backgroundColor: props.bgColor, fontStyle: (props.isItalic ? "italic" : "normal") }}>
		{props.title || props.children}</button>
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	bgColor: PropTypes.string.isRequired,
	clickActionPerso: PropTypes.func.isRequired
}
Button.defaultProps = {
	bgColor: "BlueViolet",
	isItalic: true
}

export default Button;