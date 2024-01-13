import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Component/login.js'
import Home from './Component/Home.js';
import SignUp from './Component/SignUp.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Home}></Route>
        <Route path='/login' exact Component={Login}></Route>
        <Route path='/signUp' exact Component={SignUp}></Route>
      </Routes>
      </BrowserRouter>
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
