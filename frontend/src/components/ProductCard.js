import "./ProductCard.css"

const ProductCard = ({prod}) => {
  return (
    <div className='productcard-container'>
    <img className='productcard-img' src={prod.img} alt="" />
      <h1 className='productcard-title'>{prod.title}</h1>
      <span className='productcard-price'>${prod.price}</span>
    </div>
  );
};

export default ProductCard;
