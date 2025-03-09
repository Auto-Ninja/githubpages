import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

const About = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="ml-64 flex flex-col w-full">
        <Header />
        <main className="flex-grow p-4">
          <h2 className="text-xl mb-4">About Me</h2>
          <p>Here is some information about me and my background...</p>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
