import ReactDOM from 'react-dom';
import React from 'react';

let MyComponent = React.createClass({	
	getInitialState: function () {
        return {
			opacity: 1.0
        };
    },
	componentDidMount: function(){
		this.timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1){
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this),100);
	},
	render: function() {
		return (
			<div style={{opacity: this.state.opacity}}>
				Hello World
			</div>
		);
	}
});

module.exports = MyComponent;