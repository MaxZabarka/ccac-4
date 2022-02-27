import './App.scss';
import Banner from './components/Banner';
import Content from './components/Content';
import HeroCard from './components/HeroCard';
import Navbar from "./components/Navigation/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Content/>
    </div>
  );
}

export default App;
