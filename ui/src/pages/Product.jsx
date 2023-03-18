import React, { useState, useEffect } from 'react'
import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import SearchBar from '../partials/SearchBar';
import Productpage from '../partials/Productpage';

function Product() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <Productpage />
      </main>

      <Banner />
      {/*  Site footer */}
      <Footer />

      
    </div>
  );
}

export default Product;