import React from 'react';
import './Button.css';
import PropTypes from "prop-types";

function Button(props) {
	console.log(props)
	return <button onClick={evt => {
		alert('j\'ai cliqué sur ' + evt.target.innerText)
		console.warn(evt)
	}}
		className="Button"
		style={{ color: props.fontColor, backgroundColor: props.bgColor, fontStyle: (props.isItalic ? "italic" : "normal") }}>
		{props.title || props.children}</button>
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	bgColor: PropTypes.string.isRequired
}
Button.defaultProps = {
	bgColor: "BlueViolet",
	isItalic: true
}
export default Button;