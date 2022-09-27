import {useState} from "react";
import "./ProductList.css"
import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
    const[search, setSearch] = useState("");

    const searchHandler = () => {
        let updatedProducts = products;
        if (search) {
          updatedProducts = updatedProducts.filter((prod) =>
          prod.title.toLowerCase().includes(search.toLowerCase())
          );
        }
        return updatedProducts;
        // console.log(updatedProducts);
      };
      // useEffect(() => {
      //   searchHandler();
      // }, [search]);

  return (
    <div className='product-container'>
        <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search Products"></input>
      <h1 className='title'>TOP PRODUCTS</h1>
      
      <div className='wrapper'>
        {searchHandler().map((prod) => (
          <ProductCard key={prod._id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
