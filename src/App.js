import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyEditor from './components/Editor';
import EditPage from './views/EditPage';
import PageContainer from './views/PageContainer';


function App() {
  return (
    <div className="App">
      <EditPage></EditPage>
    </div>
  );
}

export default App;
