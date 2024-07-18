import React from "react";
import '../styles/Home.css';
import food1 from '../Assets/food1.jpg';
import food2 from '../Assets/food2.jpg';
import food3 from '../Assets/food3.jpg';

const Home = () => {
  return (
    <>
      <section className="section-intro">
        <header>
          <h1>Ai MasterChief</h1>
        </header>
        <div className="link-to-book-wrapper">
          <a className="link-to-book" href="">Create Your Own Chief</a>
        </div>
      </section>

      <section className="about-section">
        <article>
          <h3>
          Your Happiness is Our Responsibility.
          </h3>
          <p>
          To ensure customer happiness, we prioritize open communication, actively listen to their needs, and swiftly address any concerns. Our commitment extends to delivering high-quality products/services that exceed expectations. Regularly seeking feedback allows us to continuously improve, tailor our offerings to customer preferences, and demonstrate our dedication to their satisfaction. Timely and personalized support further enhances the overall customer experience, fostering a positive relationship and solidifying trust in our brand.


          </p>
        </article>
      </section>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={food1} className="d-block w-100" alt="food1" />
          </div>
          <div className="carousel-item">
            <img src={food2} className="d-block w-100" alt="food2" />
          </div>
          <div className="carousel-item">
            <img src={food3} className="d-block w-100" alt="food3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="row-flex">
          <div className="flex-column-form">
            <h3>
              Try Our Trail
            </h3>
            <form className="media-centered">
              <div className="form-group">
                <p>
                  Please leave your number we will call to make a reservation
                </p>
                <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="number" className="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="contact-adress">
            <h3>
              Contact
            </h3>
            <p>
              <span>000 8793 8456</span>
              <span>15 Florida Ave</span>
              <span>Palo-Alto, 1111 CA</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;