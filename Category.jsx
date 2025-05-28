import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Category.css'
export default function Category() {
  const navigate=useNavigate();
  return (
    <>
    <h1
    style={{
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'black',
      fontFamily: 'initial',
      padding: '2%',
      marginBottom:'0%'
    }}
  >
    Our Products
  </h1>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(190, 191, 192)'}}>
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li >
            
            <Link className="nav-link fw-bold " to="/best-selling" onClick={()=>navigate('/best-selling')} >
              Best Selling
            </Link>
          </li>
          <li >
            <Link className="nav-link fw-bold" to="/new-arrival" onClick={()=>navigate('/new-arrival')}>
              New Arrival
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
