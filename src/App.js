import './App.css';
import { useState } from 'react';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/addData';
import Edit from './pages/editData'
import Delete from './pages/deleteData'

const App = () => {
  const [user, setUser] = useState([{ name: "Wajid", email: "wajidaman5@gmail.com", dob: "2000-18-02", ocupation: "Developer", gender: "Male" }, {name: "Aman", email: "aman5@gmail.com", dob: "2000-01-01", ocupation: "engineer", gender: "Male"}]);
  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/add" element={<Add user={user} setUserData={setUser} />} />
        <Route path="/edit" element={<Edit user={user} setUserData={setUser} />} />
        <Route path="/delete" element={<Delete user={user} setUserData={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
