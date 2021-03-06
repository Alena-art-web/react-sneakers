import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginBlock from "./components/LoginBlock";
import RegisterBlock from "./components/RegisterBlock";
import './styles/index.scss'
import Home from "./components/Home";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { fetchUserGetMe, selectCurrentUser } from "./redux/slices/auth";
import { useSelector } from "react-redux";
import NotFound from "./components/NotFound";

function App() {
  const dispatch = useAppDispatch()
  const isAuth = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(fetchUserGetMe())
  }, [])
  

  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginBlock />} />
          <Route path='/registration' element={<RegisterBlock />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </div>
      
    </div>
  );
}

export default App;

