import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginBlock from "./components/LoginBlock";
import ProductsBlock from "./components/ProductsBlock";
import RegisterBlock from "./components/RegisterBlock";
import './styles/index.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<ProductsBlock/>}/>
          <Route path='/login' element={<LoginBlock />} />
          <Route path='/registration' element={<RegisterBlock />} />
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;

