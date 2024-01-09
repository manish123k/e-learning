import './App.css';
import Footer from './Component/footer.js'
import NavBar from './Component/nav-bar.js'
function Header(){
 return (
  <div>
    <ul>
      <li><a>Home</a></li>
      <li><a>Login</a></li>
      <li><a>Signup</a></li>
    </ul>
  </div>
 );
}
function App() {
  return (
    <div className="App">
      <div><NavBar/></div>
      <Footer />
    </div>
  );
}

export default App;
