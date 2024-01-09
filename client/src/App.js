import logo from './logo.svg';
import './App.css';
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
function Footer(){
  return(
    
  );
}
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
