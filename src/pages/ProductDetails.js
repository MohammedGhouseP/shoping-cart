import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch, cart } = useAuth();
  
  const product = {
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'Detailed description',
    specifications: 'Some specs'
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 }
    });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>{product.specifications}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>Items in cart: {cart.length}</p>
    </div>
  );
};

export default ProductDetail;