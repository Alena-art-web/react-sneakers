import Header from "./components/Header";
import ProductsBlock from "./components/ProductsBlock";
import './styles/index.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className='content'>
        <ProductsBlock/>
      </div>
      
    </div>
  );
}

export default App;

