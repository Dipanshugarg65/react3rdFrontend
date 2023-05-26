// import logo from './logo.svg';
import './App.css';
import DataProvider from './context/DataProvider';
//Components
import Login from "./components/accouts/login";
import Home from './components/home/Home';


function App() {
  return (
    <div style = {{marginTop: 70}}>
    <DataProvider >
      <Login/>
      <Home/>
    </DataProvider>
    </div>
  );
}

export default App;
