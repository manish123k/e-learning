import './App.css';
import Footer from './Component/footer.js'
import NavBar from './Component/nav-bar.js'
import {Programing,Backend} from './Component/programing.js';
function App() {
  return (
    <div className="App">
      <div><NavBar/></div>
      <h1>Programing language</h1>
      <div><Programing /></div>
      <h1>Backend language</h1>
      <div><Backend /></div>
      <Footer />
    </div>
  );
}

export default App;
