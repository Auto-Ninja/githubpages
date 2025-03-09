import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import Accordion from '../components/Accordion';
import Tabs from '../components/Tabs';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <div className="flex flex-grow">
        <SideNav />
        <div className="flex flex-col flex-grow ml-64">
          <main className="flex-grow p-4">
            <h2 className="text-xl mb-4">Welcome to my portfolio!</h2>
            <Accordion title="Accordion 1" content="Content for accordion 1." />
            <Accordion title="Accordion 2" content="Content for accordion 2." />
            <Tabs />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
