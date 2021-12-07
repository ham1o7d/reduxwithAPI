import React from "react";
import './App.css';
import TodoList from './Secreens/TodoList/ClassComp/TodoList' ;
// import SignIn from './Secreens/Auth/SighIn/SignIn'

class App extends React.Component {
    
    render() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
  }
}

export default App;
