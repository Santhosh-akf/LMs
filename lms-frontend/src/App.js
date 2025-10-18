import React from 'react';
import Register from './components/Register';
import './App.css'; // We will add some basic styling here

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Learning Management System</h1>
            </header>
            <main>
                <Register />
            </main>
        </div>
    );
};

export default App;