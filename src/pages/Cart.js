import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Cart = () => {
  const { cart, dispatch } = useAuth();
  const WEBHOOK_URL = 'YOUR_WEBHOOK_URL'; // Get from webhook.site

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handlePurchase = async () => {
    try {
      await axios.post(WEBHOOK_URL, {
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      });
      alert('Purchase successful!');
    } catch (error) {
      alert('Purchase failed!');
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: 
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
              -
            </button>
            {item.quantity}
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
              +
            </button>
          </p>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}</h3>
      <button onClick={handlePurchase}>Buy Now</button>
    </div>
  );
};

export default Cart;    