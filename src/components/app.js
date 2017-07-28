import React from 'react';
// import TopNav from './top-nav';
import Header from './header';
import Footer from './footer';
import SignupForm from './signup-form';
import './app.css';


export default function App(){
    return (
      <div>
       
        <Header />
        <section>
          <h3>Make an Informed Decision</h3>
          <p>Pet Doc Finder shows you veterinians located around you or around a location of your choice. Compare reviews and prices, so that you can choose which one will be the best to take care of your loved one.</p>
        </section>
        <section>
          <h3>Help Others Make an Informed Decision</h3>
          <p>Help others who are looking for the best vet by adding the price of services from the vet that you like.</p>
        </section>
        <section>
          <SignupForm />
        </section>
        <Footer />
      </div>
    );
  }

