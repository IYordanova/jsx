// Import react and reatdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function () {
    return <div>Hi there!</div>;
}
// Take react component and show on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);