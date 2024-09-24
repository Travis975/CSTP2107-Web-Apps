import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from'./components/Footer/Footer'
import UserList from './components/UserList/UserList'
import data from './assets/people.json'


function App() {
  const [userData, setUserData] = useState(data)

  return (
    <div>
      {/* {Header Component} */}
      <Header />

      {/* User List */}
      <h1>Below is a list of our esteemed users!</h1>
      <UserList userData={userData} />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
