import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/contact-page.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />

        <div className="container">
          <div className="header">
            <h2>We Are ...</h2>
            <hr />
            <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify' }}>
              <b>
                We are Sea Breeze located in Mannar. We provide deluxe rooms, villas as pre-defined packages, and
                event packages. You can customize your event packages to your preference. Additionally, we offer
                enamored outdoor locations for your pre-shoots.
              </b>
            </p>
          </div>

          &nbsp;
          &nbsp;

          <div className="row">
            <div className="col-md-5">
              <div className="full slider_cont_section">
                <h4><b>WELCOME TO SEA BREEZE !</b></h4>
                <p>
                  Sea Breeze Hotel is a charming boutique hotel located in the heart
                  of Mannar, Sri Lanka. The hotel is just a short walk from the
                  beach, making it the perfect place to relax and enjoy the stunning
                  views of the Indian Ocean. The hotel offers a variety of
                  accommodation options, including spacious villas with private
                  terraces. All rooms are equipped with air conditioning,
                  flat-screen TVs, and en suite bathrooms. You can enjoy a delicious
                  breakfast buffet each morning at the hotel's restaurant.
                </p>
              </div>
            </div>
            {/* <div className="col-md-7">
              <img
                src="assets/img/food.jpg"
                alt="Hotel Image"
                className="img-fluid"
                width={500}
                height={500}
              />
            </div> */}
          </div>

          <div className="section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-6">
                  <div className="full blog_cont">
                    <h3>
                      Are You Looking For The Perfect Place To Host Your Next Event?
                    </h3>
                    <h4><b>OUR PACKAGES</b></h4>
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
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="full blog_cont">
                    <h3>Take A Look At Our Delicious Food </h3>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs;