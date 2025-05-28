import React from 'react';
import { useCart } from '../Context/CartContext';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // You can redirect to your checkout page or handle checkout logic here
    navigate('/checkout');
  };

  return (
    <>
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p style={styles.emptyText}>Cart is empty.</p>
        ) : (
          <>
            <div style={styles.cartList}>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <img src={item.images[0]} alt={item.title} style={styles.productImage} />
                  <div style={styles.productInfo}>
                    <p style={styles.productTitle}>{item.title}</p>
                    <p style={styles.productPrice}>${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button style={styles.checkoutButton} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  pageContainer: {
    minHeight: '90vh',
    backgroundColor: '#000000', // black background
    color: '#FFFFFF', // white text
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heading: {
    color: ' #E8EAAD', 
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: 'initial',
  },
  emptyText: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '3rem',
  },
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '700px',
    margin: '0 auto',
    width: '100%',
  },
  cartItem: {
    display: 'flex',
    backgroundColor: '#121212',
    borderRadius: '12px',
    padding: '1rem',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 4px 10px rgba(214, 195, 164, 0.3)', // subtle beige shadow
  },
  productImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  productInfo: {
    flexGrow: 1,
  },
  productTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    margin: 0,
    color: ' #E8EAAD',
  },
  productPrice: {
    margin: '0.3rem 0 0.7rem',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  removeButton: {
    backgroundColor: ' #E8EAAD',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1.2rem',
    color: '#000',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  checkoutButton: {
    marginTop: '2rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: ' #E8EAAD',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem 2rem',
    color: '#000',
    fontSize: '1.2rem',
      fontFamily:'initial',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'block',
    transition: 'background-color 0.3s ease',
  },
};

export default CartPage;
