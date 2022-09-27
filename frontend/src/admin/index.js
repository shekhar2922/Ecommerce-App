import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
import {useNavigate} from "react-router-dom"

const Index = () => {
  const [productList, setproductList] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    let adminInfo = localStorage.getItem("adminInfo")
    if(!adminInfo){
      navigate('/admin/login')
    }
  },[navigate])

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      await axios.delete(
        `https://ecommerce-app007.netlify.app/api/products/${id}`
      );
      setproductList(productList.filter((prod) => prod._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    const title = prompt("Enter product title to update")
    try {
      const res = await axios.put("https://ecommerce-app007.netlify.app/api/products", {title , id});
      setproductList([
        res.data,
        ...productList.filter((prod) => prod._id !== id),
      ]);
      
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async() => {
    let res = await axios.get("/api/products");
    setproductList(res.data)
    // console.log(res.data)
  }
  useEffect(()=> {
    fetchProducts()
  },[])

  return (
    <div className='admin-container'>
      <div className='admin-item'>
        <button className='admin-logoutBtn' onClick={()=> {localStorage.removeItem("adminInfo")
         navigate('/admin/login')}} >Log Out</button>
        <h1 className='admin-title'>Products</h1>
        <table className='admin-table'>
          <tbody>
            <tr className='admin-trTitle'>
              <th className='admin-th'>Image</th>
              <th className='admin-th'>Id</th>
              <th className='admin-th'>Title</th>
              <th className='admin-th'>Price</th>
              <th className='admin-th'>Action</th>
            </tr>
          </tbody>
          {productList.map((product) => (
            <tbody key={product._id}>
              <tr className='admin-trTitle'>
                <td>
                  <div className='admin-imgContainer'>
                  <img
                    src={product.img}
                    alt=""
                  />
                  </div>                 
                </td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button 
                    onClick={() => handleUpdate(product._id)}
                    className='admin-button'>Edit</button>
                  <button
                    className='admin-button'
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Index;
