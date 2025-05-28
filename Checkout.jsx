import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import Footer from '../Component/Footer';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields (Name, Phone, Address)");
      return;
    }
    alert(`Order placed!\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`);
    clearCart();
    setName('');
    setPhone('');
    setAddress('');
  };

  return (
    <>
      <div style={styles.pageContainer}>
        <h2 style={styles.heading}>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p style={styles.emptyText}>Your cart is empty.</p>
        ) : (
          <>
            <div style={styles.itemsList}>
              {cartItems.map((item) => (
                <p key={item.id} style={styles.itemText}>
                  {item.title} - ${item.price.toFixed(2)}
                </p>
              ))}
            </div>

            <p style={styles.totalText}>Total: ${total.toFixed(2)}</p>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={styles.input}
            />

            <button onClick={handleOrder} style={styles.orderButton}>
              Place Order
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
    minHeight: '70vh',
  
    background: 'rgb(53, 52, 52) ',
    color: '#FFFFFF',
    padding: '2rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
 
    margin: '0 auto',
 
    boxShadow: '0 0 30px rgba(214, 195, 164, 0.7)',
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
  itemsList: {
    marginBottom: '1.5rem',
  },
  itemText: {
    fontSize: '1.2rem',
    color: ' #E8EAAD', 
    marginBottom: '0.5rem',
  },
  totalText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: ' #E8EAAD',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid  #E8EAAD',
    fontSize: '1rem',
    marginBottom: '1.5rem',
    outline: 'none',
    backgroundColor: 'rgba(214, 195, 164, 0.15)',
    color: '#FFF8E1',
  },
  orderButton: {
    backgroundColor: ' #E8EAAD',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem 2rem',
    color: '#000',
    fontSize: '1.2rem',
    fontWeight: '700',
    fontFamily:'initial',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
    transition: 'background-color 0.3s ease',
  },
};

export default CheckoutPage;
