import React, { Component } from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white">
        <div className="container bg-light text-center text-dark py-2">
          <Newsletter />
        </div>
        <div className="container py-3">
          <div className="d-flex flex-row flex-wrap">
            <div className="mr-4">
              <h4>Customer Service</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/order_tracking">Order Tracking</Link>
                </li>
                <li>
                  <Link to="/returns_and_exchanges">Returns and Exchanges</Link>
                </li>
                <li>
                  <Link to="/refunds">Refunds</Link>
                </li>
                <li>
                  <Link to="/delivery_and_collections">
                    Delivery & Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ml-4">
              <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
            </div>

            <div className="ml-auto">
              <h4>Get in Touch</h4>
              <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fab fa-twitter fa-2x pr-2" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fab fa-facebook-f fa-2x pr-2" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fab fa-linkedin fa-2x pr-2" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fab fa-pinterest fa-2x" />
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <span className="block">
                  Copyright &copy; 2019 by Author. All rights reserved
                </span>
                <br />
                <span className="block">
                  Images by:{" "}
                  <Link to="http://unsplash.co/" target="_blank">
                    Unsplash
                  </Link>
                </span>
                <br />
                <span className="block">
                  <Link to="#">Back to top</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}