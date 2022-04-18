//import './App.css';
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
