import "./AddButton.css"

const AddButton = ({setClose}) => {
  return (
    <div onClick={()=> setClose(false)} className='mainAddButton'>
      Add New Product
    </div>
  );
};

export default AddButton;
