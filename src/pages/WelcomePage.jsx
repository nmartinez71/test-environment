import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {
  return (
    <div>
      <div className="container mt-5">
        <div className="jumbotron text-center">
          <h1 className="display-4">Welcome to Our Student Registration Website!</h1>
          <p className="lead">We're glad to have you here. Explore and enjoy your stay.</p>
          <hr className="my-4" />
          <p>Get started by logging in with the button below.</p>
          <a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
