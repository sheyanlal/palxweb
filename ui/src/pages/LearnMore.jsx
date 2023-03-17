import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function LearnMore() {
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

        {/*  Page sections */}
        <FeaturesZigZag />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default LearnMore;