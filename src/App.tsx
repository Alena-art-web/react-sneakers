import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginBlock from "./components/LoginBlock";
import RegisterBlock from "./components/RegisterBlock";
import './styles/index.scss'
import Home from "./components/Home";

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginBlock />} />
          <Route path='/registration' element={<RegisterBlock />} />
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;

