import './App.css';

// Importing components
import Navbar from './Components/Navbar.jsx';
import Intro from './Components/Intro.jsx';

// Importing variables
import "./CSS/variables.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
