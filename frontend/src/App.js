import './App.css';
import Header from './components/Header';
import Addstudent from './components/Addstudent';
import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
  return (
    
    <div>
      <Header/>
      <BrowserRouter>
       <Routes>
         <Route path="/add" element={<Addstudent/>} />
       </Routes>
      </BrowserRouter>
     
    </div>
    
    
  );
}

export default App;
