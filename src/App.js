import Index from './pages/Index';
import About from './pages/About';
import Service from './pages/service';
import Team from './pages/team';
import Why from './pages/why';
import Login from './pages/login';
import Register from "./pages/Register";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
    return(
        <div className='App'>
             <Router>
                <Routes>
                    <Route path='/' element={<Index />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/service' element={<Service />}/>
                    <Route path='/team' element={<Team />}/>
                    <Route path='/why' element={<Why />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path="/signup" element={<Register />}></Route>
                </Routes>
             </Router>
        
            {/* <Index/> */}
            {/* <About/> */}
        </div>

    );
  
}

export default App;
