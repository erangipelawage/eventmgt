import React from 'react';

const Blog = () => {
    return(
        <>
       {/* basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* mobile metas */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  {/* site metas */}
  <title>SEABREEZE Hotel - Blogs</title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  {/* bootstrap css */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* style css */}
  <link rel="stylesheet" href="css/style.css" />
  {/* Responsive*/}
  <link rel="stylesheet" href="css/responsive.css" />
  {/* fevicon */}
  <link rel="icon" href="images/fevicon.png" type="image/gif" />
  {/* Scrollbar Custom CSS */}
  <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
  {/* Tweaks for older IEs*/}
  {/*[if lt IE 9]>

<![endif]*/}
  {/* body */}
  {/* loader  */}
  <div className="loader_bg">
    <div className="loader">
      <img src="images/loading.gif" alt="" />
    </div>
  </div>
  {/* end loader */}
  {/* header */}
  <header>
    {/* header inner */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo">
                {" "}
                <a href="index.html">
                  <img src="images/logo.png" alt="#" />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="menu-area">
            <div className="limit-box">
              <nav className="main-menu">
                <ul className="menu-area-main">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="marketing.html">Marketing</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/search_icon.png" alt="#" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end header inner */}
  </header>
  {/* end header */}
  {/* revolution slider */}
  <div className="banner-slider">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <div id="slider_main" className="carousel slide" data-ride="carousel">
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/food set 1.jpg" alt="#" />
              </div>
              <div className="carousel-item">
                <img src="images/food set 2.jpg" alt="#" />
              </div>
              <div className="carousel-item">
                <img src="images/food set 3.jpg" alt="#" />
              </div>
            </div>
            {/* Left and right controls */}
            <a
              className="carousel-control-prev"
              href="#slider_main"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#slider_main"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="col-md-5">
          <div className="full slider_cont_section">
            <h3>Hi fodies🍨🍷🍾</h3>
            <h4>WELCOME TO SEA BREEZE !</h4>
            <p>
              Sea Breeze Hotel is a charming boutique hotel located in the heart
              of Mannar, Sri Lanka. The hotel is just a short walk from the
              beach, making it the perfect place to relax and enjoy the stunning
              views of the Indian Ocean.The hotel offers a variety of
              accommodation options, including spacious villas with private
              terraces. All rooms are equipped with air conditioning,
              flat-screen TVs, and en suite bathrooms.You can enjoy a delicious
              breakfast buffet each morning at the hotel's restaurant.{" "}
            </p>
            <div className="button_section">
              <a href="about.html">Read More</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end revolution slider */}
  {/* section */}
  <div className="section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading">
            <h3>
              Here We <span className="orange_color">Are</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="video">
            <video width={600} height={340} controls="" autoPlay="" loop="">
              <source src="images\blog v1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full blog_cont">
            <h4>
              Are you looking for the perfect place to host your next event?
            </h4>
            <h5>Our Packages</h5>
            <p>
              Look no further than our events packages! We offer a variety of
              packages to fit your needs, from small intimate gatherings to
              large-scale conferences.We have Room packages,Outdoor location
              packages for <b>Photoshoots</b> and event packages for{" "}
              <b>Weddings, Night functions</b> and specialy we having a package
              called<b>Jumbo Package</b> Which can use for meetings,celebrated
              b'day parties and all.
            </p>
          </div>
        </div>
      </div>
      <div className="row margin_top_30">
        <div className="col-md-6">
          <div className="video">
            <video width={600} height={340} controls="" autoPlay="" loop="">
              <source src="images\blog v3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full blog_cont">
            <h4>Take a look at our delicious food </h4>
            <h5>Hi Foddies</h5>
            <p>
              The hotel's restaurant offers a wide variety of delicious and
              beautifully presented dishes, all made with fresh, seasonal
              ingredients.The menu changes seasonally to reflect the best of
              what's available, but you can always expect to find fresh seafood,
              locally-sourced meats and produce, and creative twists on classic
              dishes.Our buffet is a feast for the senses, with a variety of
              dishes to tantalize your taste buds.Whether you're looking for a
              romantic dinner for two or a casual meal with friends, the hotel's
              restaurant is the perfect place to enjoy a delicious meal.
            </p>
          </div>
        </div>
      </div>
      <div className="row margin_top_30">
        <div className="col-md-12">
          <div className="button_section full center margin_top_30">
            <a style={{ margin: 0 }} href="about.html">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section */}
  {/* footer */}
  {/* Javascript files*/}
  {/* Scrollbar Js Files */}
        </>
    )
}

export default Blog;