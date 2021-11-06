import React from 'react';
import Navbar from '../components/Navbar';
import { Footer, FooterCopyright } from '../components/Footer';

const Sitemap = () => {

  return (
    <React.Fragment>
      <Navbar>@shotastage</Navbar>
        <h2>Sitemap</h2>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default Sitemap;
