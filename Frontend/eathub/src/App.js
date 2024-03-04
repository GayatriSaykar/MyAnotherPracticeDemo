import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import CustHome from './components/CustHome';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import MessReg from './components/MessReg';
import MessHome from './components/MessHome';
import Admin from './components/Admin';
import Payment from './components/Payment';
import CustPlan from './components/CustPlan';
import AddMenu from './components/AddMenu';



function App() {
  return (
    <div className="App">
      <Routes>
      < Route path='/customer-signup' element={<Register/>}> </Route>
      < Route path='/login' element={<Login/>}> </Route>
      < Route path='/' element={ <Navbar/>}> </Route>
      < Route path='/custhome' element={<CustHome/>}> </Route>
      < Route path='/mess-signup' element={<MessReg/>} ></Route>
      < Route path='/vendor' element={<MessHome/>} ></Route>
      < Route path='/admin' element={<Admin/>} ></Route>
      <Route path='/payment' element={<Payment />}></Route>
      <Route path='/custplan/:mess_id' element={<CustPlan />}></Route>
      <Route path='/addmenu' element={<AddMenu/>}></Route>
      
     

      


      </Routes>
    </div>
  );
}

export default App;
