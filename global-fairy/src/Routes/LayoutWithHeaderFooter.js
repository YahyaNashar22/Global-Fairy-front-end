import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

function LayoutWithHeaderFooter({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWithHeaderFooter;
