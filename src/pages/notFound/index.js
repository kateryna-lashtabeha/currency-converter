import React from 'react';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import notFoundIMG from '../../img/404.jpeg';
import './style.scss'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="nonfound-wrapper">
      <Container maxWidth="md">
        <img src={notFoundIMG} alt="404" />
        <p>Sorry, the page you are looking for cannot be found.</p>
        <div className="hero__links">
          <button className="btn btn--blue" onClick={() => navigate(-1)}>Back</button>
          <a className="btn btn--blue" href="/">Home page</a>
        </div>
      </Container>
    </div>
  )
}
export default NotFound;
