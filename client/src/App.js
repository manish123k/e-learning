import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Component/login.js'
import Home from './Component/Home.js';
import SignUp from './Component/SignUp.js';
import otpVerifyForm from './Component/otpVerifyForm.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact Component={Home}></Route>
        <Route path='/login' exact Component={Login}></Route>
        <Route path='/signUp' exact Component={SignUp}></Route>
        <Route path='/otpVerifyForm' exact Component={otpVerifyForm}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    );


}

export default App;
