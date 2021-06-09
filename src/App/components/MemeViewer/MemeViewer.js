import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
import { BASE_IMG_URL } from "../../config/config.js";

const MemeViewer = (props) => (
  <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={'0 0 ' + (props.meme.image ? `${props.meme.image.width} ${props.meme.image.height}` : '500 300')}>
    {props.meme.image && <image href={`${BASE_IMG_URL}${props.meme.image.url}`} x="0" y="0" />}
    <text x={props.meme.x} y={props.meme.y}>{props.meme.text}</text>
  </svg>
);

MemeViewer.propTypes = { meme: PropTypes.object.isRequired };

MemeViewer.defaultProps = {};

export default MemeViewer;
