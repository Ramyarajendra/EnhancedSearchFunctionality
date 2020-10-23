import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import NavBar from './components/layouts/NavBar';
import SearchBar from './components/layouts/SearchBar';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar/>
        <SearchBar/>
      </div>
    </Provider>
  );
}

export default App;
