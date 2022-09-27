import React,{useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import Add from "./components/Add";
import Navbar from "./components/Navbar"
import AddButton from "./components/AddButton"
import ProductList from "./components/ProductList"
import Login from "./admin/login"
import Index from "./admin/index"
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  const[products, setProducts] = useState([])
  const[close, setClose] = useState(true)

  const fetchProducts = async() => {
    let res = await axios.get("/api/products");
    setProducts(res.data)
    // console.log(res.data)
  }
  useEffect(()=> {
    fetchProducts()
  },[])

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<>
        <AddButton setClose={setClose}/>
      <ProductList products={products} />
      {!close && <Add setClose={setClose} />}
      </>} />

      <Route path="/admin/login" element={<><Login /></>} />
      <Route path="/admin/index" element={<><Index /></>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
