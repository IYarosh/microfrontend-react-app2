import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>React 2 app is mounted!</h1>
    )
}

export function bootstrap(props) {
    console.log('React app 2 bootstrap. Props:', props);
    return Promise
        .resolve()
        .then(() => {

        })
}

export function mount(props) {
    console.log('React app 2 mount. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            ReactDOM.render(<App />, document.getElementById('app2-container'));
        })
}

export function unmount(props) {
    console.log('React app 2 unmount. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            ReactDOM.unmountComponentAtNode(document.getElementById('app2-container'));
        })
}

export default 'Test message from React app 2';