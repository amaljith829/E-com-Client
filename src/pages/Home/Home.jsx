import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.css';

function Home() {
  return (
    <>
      <Navbar />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Welcome to K-Basket</h1>
        <div className="row mb-4">
          <div className="col-md-8 offset-md-2">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search for products..."
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-8 offset-md-2">
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter delivery location..."
            />
          </div>
        </div>
        <div className="text-center">
          <button id="kBasketButton" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <Footer />

    </>

  )
}

export default Home