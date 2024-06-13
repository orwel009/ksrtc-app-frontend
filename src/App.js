import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/addBus' element={<AddBus/>}/>
        <Route path='/viewBus' element={<ViewBus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
