import Navbar from './component/Navbar';
import Product from './component/Product';
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Products from './component/Products';


function App() {
  return (
    <Router>
    <>
    
    <Navbar />
    <Routes>
    <Route exact path="/" element={ < Product />} />
    <Route exact path="/products/:id" element={ < Products />} />
    </Routes>

    {/* <Product /> */}

    </>
    </Router>
  );
}

export default App;
