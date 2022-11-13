const Quantity = ({ item, handleIncrementQuantity, handleDecrementQuantity }) => {

    console.log(item.id ,'itemitemitemitem')

    return (
        <span >
            <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
        </span>
    );
};

export default Quantity;

