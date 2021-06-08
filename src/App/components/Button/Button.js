import React from 'react';
import './Button.css';

function Button(props) {
	console.log(props)
	// const title = 'Mon petit bouton mouton';
	//if (props.children){
		//return <button className="Button" style={{ color: 'white', backgroundColor: 'skyblue' }}>{props.children}</button>
	//} else {
		return <button className="Button" style={{color: props.fontColor, backgroundColor: props.bgColor }}>{props.title || props.children}</button>
	//}
	
}

export default Button;