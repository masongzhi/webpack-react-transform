import ReactDOM from 'react-dom';
import React from 'react';
import MyComponent from './component.jsx'

main();

function main() {
    ReactDOM.render(
	  <MyComponent />,
	  document.getElementById('app')
	);
}