import React from 'react';
import ReactDOM from 'react-dom';
import RecorderContainer from './RecorderContainer';
import './index.css'

ReactDOM.render(
  <div>
    <RecorderContainer />
    <video id="myVideo" class="video-js vjs-default-skin"></video>
  </div>,
  document.getElementById('root')
);