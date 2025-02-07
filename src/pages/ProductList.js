import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description 1' },
  { id: 2, name: 'Product 2', price: 20, description: 'Description 2' },
];

const ProductList = () => {
  const { cart } = useAuth();

  return (
    <div>
      <h2>Products</h2>
      <nav>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;