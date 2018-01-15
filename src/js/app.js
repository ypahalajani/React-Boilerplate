import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/keen.png'

export default class Hello extends Component {
  render() {
    return (
      <div>
        <img src={ keenImage } id="keen" alt="Commander Keen"/>
        <p>Hello from React Component Hello</p>
      </div>
    );
  }
}

render(
  <Hello />,
  document.getElementById('app')
);