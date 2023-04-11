
import './App.css';
import { Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Error from './pages/404/404';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Account from './pages/Account/Account';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (  
    
    
    <Routes>
        
        <Route path='/' element={<Home></Home>}   ></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='*' element={<Error></Error>}></Route>  
        <Route path='/signin' element={<SignIn></SignIn>}></Route>  
        <Route path='/signup' element={<SignUp></SignUp>}></Route> 
        <Route path='/myaccount' element={<ProtectedRoutes>
          <Account></Account>
        </ProtectedRoutes>
        }></Route>     
      </Routes> 
  
    
  );
}

export default App;
