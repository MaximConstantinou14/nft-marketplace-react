import './App.css';

// Importing components
import Navbar from './Components/Navbar.jsx';
import Intro from './Components/Intro.jsx';
import TrendingCollection from './Components/TrendingCollection.jsx';
import TopCreatorsHeader from './Components/TopCreatorsHeader';
import TopCreators from './Components/TopCreators';

// Importing variables
import "./CSS/variables.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <TrendingCollection />
      <TopCreatorsHeader />
      <TopCreators />
    </div>
  );
}

export default App;
