import logo from './logo.svg';
import './App.css';
import CustomSearchBar from './components/searchBar';
import DisplayImage from './components/displayImage';

function App() {
  return (
    <div className="App">
      <div className="Search">
        <CustomSearchBar />
      </div>
      <div>
        <DisplayImage />
      </div>
    </div>
  );
}

export default App;
