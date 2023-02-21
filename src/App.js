import './App.css';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState([{name: "w", age: 4, gender: "m" }, {name: "waj", age: 3, gender: "ma" }, {name: "waji", age: 2, gender: "mal" }]);
  

  const add_data = () => {
    console.log(user);
    const user4 = [{name: "kj", age: 13, gender: "male"}];
    let arr = user.concat(user4);
    setUser(arr);
  }

  const edit_data = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={add_data}>add</button>
      </header>
    </div>
  );
}

export default App;
