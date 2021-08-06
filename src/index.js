import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router-dom'


import {
    Login,
    Register
  } from './components/Login';

function App() {
    // const [user, setUser] = useState();

    return (
        <div>
            <Login />
            <Register />
        </div>
    )
}



/**
 * Boostrap the <App /> component into the '#app' element in the DOM,
 * using ReactDOM.render();
 */

ReactDOM.render(
<App />,
document.getElementById('app')
);