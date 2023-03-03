import React from 'react';
import Container from '@mui/material/Container';
import USFlag from '../../img/us.svg'; 
import GBFlag from '../../img/gb.svg';
import EUFlag from '../../img/eu.svg';
import management from '../../img/management.jpg';

const Home = () => {
  return (
    <Container maxWidth="md">
      <div className="hero__container">
        <figure className="hero__flag hero__flag--lt">
          <img src={USFlag} alt="US flag" />
          <figcaption>USD</figcaption>
        </figure>
        <figure className="hero__flag hero__flag--rm">
          <img src={GBFlag} alt="Great Britain flag" />
          <figcaption>GBP</figcaption>
        </figure>
        <figure className="hero__flag hero__flag--lb">
          <img src={EUFlag} alt="EU flag" />
          <figcaption>EUR</figcaption>
        </figure>
        <img className="hero__img" src={management} alt="" />
      </div>
      <h1 className="main__title">All currency support</h1>
      <div className="hero__links">
        <a className="btn" href="/convert-currency">Convert</a>
      </div>
    </Container>
  );
}

export default Home;
