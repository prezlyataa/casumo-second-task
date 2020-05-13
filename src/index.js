import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const CustomReact = {
  stateArr: [],
  currentStateIndex: 0,
  component: null,
  useState(initialValue) {
    if (this.currentStateIndex === this.stateArr.length) {
      const statePair = {
        value: initialValue,
        setState(newValue) {
          statePair.value = newValue;
          CustomReact.currentStateIndex = 0;
          ReactDOM.render(<CustomReact.component />, rootElement);
        }
      };

      this.stateArr.push(statePair);
    }

    const currentStatePair = this.stateArr[this.currentStateIndex];

    this.currentStateIndex += 1;

    return [currentStatePair.value, currentStatePair.setState];
  },
  render(component, rootElement) {
    this.component = component;
    this.rootElement = rootElement;

    ReactDOM.render(<this.component />, this.rootElement);
  }
};

const rootElement = document.getElementById("root");

CustomReact.render(App, rootElement);

export { CustomReact };
