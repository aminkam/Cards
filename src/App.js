import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Items from './components/Items';
import NavBarr from './components/NavBarr';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <Items />
    </div>
  );
}

export default App;
