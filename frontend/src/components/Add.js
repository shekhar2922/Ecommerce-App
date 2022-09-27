import { useState } from "react";
import axios from "axios";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false)

  const handleCreate = async () => {
    setDisable(true)
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      let adminInfo = localStorage.getItem("adminInfo")
      if(adminInfo){
      
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/shekhar2919/image/upload",
          data
        );

        const { url } = uploadRes.data;
        const newProduct = {
          title,
          price,
          img: url,
        };
        await axios.post("https://ecommerce-app007.netlify.app/api/products", newProduct);
        setClose(true);
      }
      else{
      setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='add-container'>
      <div className='add-wrapper'>
        <span onClick={() => setClose(true)} className='add-close'>
          X
        </span>
        <h1 className='add-h1'>Add a new Product</h1>
        <div className='add-item'>
          <label className='add-label'>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        </div>
        <div className='add-item'>
          <label className='add-label'>Title</label>
          <input
            className='add-input'
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className='add-item'>
          <label className='add-label'>Price</label>
          <div className='add-priceContainer'>
            <input
              className='add-input'
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        
        <button className='addButton' onClick={handleCreate} disabled={disable}>
          Create
        </button>
        {error && <span className='login-error'>Not Authenticated!</span>}
      </div>
    </div>
  );
};

export default Add;
