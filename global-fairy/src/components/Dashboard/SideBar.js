import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard'

const Sidebar = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const linkStyle = (page) => {
    return {
      color: activePage === page ? '#D81A84' : 'inherit',
      backgroundColor: activePage === page ? '#F9F1E8' : 'inherit',

      textDecoration: 'none',
      padding: '8px',
      display: 'block',
      marginBottom: '9px',
      marginLeft:"1.5rem",
      fontSize:"20px"
     
    };
  };

  const logoutButtonStyle = {
    
    backgroundColor: "#D81A84",
    color: "#F9F1E8",
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    width:"7rem",
    marginLeft:"2rem",
    fontSize:"20px",
    borderRadius:"10px"
    
  
  };

  return (
    <div style={{ width: '200px', height: '900px', background: '#F9F1E8', color: '#85255B', padding:"20px" }}>
      <Link to="/" onClick={() => handlePageChange()} style={linkStyle('dashboard')}>
        Home
      </Link>
      <Link to="/dashboard" onClick={() => handlePageChange(<Dashboard/>)} style={linkStyle('products')}>
        Products
      </Link>
      <div style={{position:"absolute", top:"900px",  }}>
        <button style={logoutButtonStyle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;






