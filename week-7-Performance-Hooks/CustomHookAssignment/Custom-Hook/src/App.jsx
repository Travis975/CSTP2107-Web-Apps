import React from 'react';
import './App.css';  
import Footer from './components/Footer/Footer.jsx'; 
import Console from './components/Console/Console.jsx'; 

const App = () => {
    return (
        <div className='main'>
            <div className='content'>
                <Console />
            </div>
            <Footer />
        </div>
    );
};

export default App;
