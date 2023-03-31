import './App.css';
import Day5 from './Error';
import Errorboundary from './Error1';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;
