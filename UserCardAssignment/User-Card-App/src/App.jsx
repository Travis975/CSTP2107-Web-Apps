import {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserList from './components/UserList/UserList';
import data from './people.json'; 

function App() {

    const [userData, setUserData] = useState(data); 
    console.log(userData);
    return (
      <div>
  
        <Header />
        <Banner />
      
        <h1 className='userList'>Welcome to our Team</h1>
        <UserList userData={userData} />
        <Footer />
      </div> 
  
    )
  }
  

export default App;
