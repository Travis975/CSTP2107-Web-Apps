import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import UserList from './components/UserList/UserList.jsx';
import data from './people.json'; 

function App() {
    console.log(data);
    const [userData, setUserData] = useState(data[0].data); 

    return (
      <div>
  
        <Header />
      
        <h1 className='userList'>Welcome to our Team</h1>
        <UserList userData={userData} />
        <Footer />
      </div> 
  
    );
}
  

export default App;
