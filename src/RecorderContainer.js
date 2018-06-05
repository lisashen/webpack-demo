import React, { Component } from 'react';
import videojs from 'video.js';
import 'webrtc-adapter';

/*
// this is only needed when you're recording audio-only using the
// videojs-wavesurfer plugin

import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;

// register videojs-wavesurfer plugin
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
*/

// register videojs-record plugin with this import
import Record from 'videojs-record/dist/videojs.record.js';
import 'video.js/dist/video-js.min.css';
import 'videojs-record/dist/css/videojs.record.css';

let player;
const elementId = 'myVideo';
const playerOptions = {
    controls: true,
    autoplay: false,
    fluid: false,
    loop: false,
    width: 320,
    height: 240,
    controlBar: {
        volumePanel: false
    },
    plugins: {
        // configure videojs-record plugin
        record: {
            audio: false,
            video: true,
            debug: true
        }
    }
};

export default class RecorderContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            // create player
            player = videojs(elementId, playerOptions, function() {
                console.log('player ready! id:', elementId);
            });
        });
    }

    render() {
        return(
            <div>
                <video id="myVideo" class="video-js vjs-default-skin"></video>
            </div>
        );
    }
}