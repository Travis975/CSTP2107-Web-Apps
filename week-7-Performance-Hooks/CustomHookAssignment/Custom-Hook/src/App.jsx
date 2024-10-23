// App.js
import React from 'react';
import './App.css'; 
import Footer from './components/Footer/Footer.jsx'; 
import Console from './components/Console/Console.jsx'; 

const App = () => {
    return (
        <div className='main'>
            <Console />
            <Footer />
        </div>
    );
};

export default App;
