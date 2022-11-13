import Quantity from "./Quantity";

const Product = ({item , handleIncrementQuantity , handleDecrementQuantity}) => {
  return (
    <span>
      {item.name} - {item.price} -
      <Quantity handleDecrementQuantity={handleDecrementQuantity} handleIncrementQuantity={handleIncrementQuantity} item={item}/>
    </span>
  );
};

export default Product;
