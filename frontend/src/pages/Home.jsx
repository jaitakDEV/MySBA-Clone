import Navbar from "../components/Navbar";
import "../css/home.css";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import Services from "../components/Services";

import Carousel from "react-material-ui-carousel";

// images
import img1 from "../assets/Carousel_1.jpeg";
import img2 from "../assets/Carousel_2.jpeg";
import img3 from "../assets/Carousel_3.jpeg";
import img4 from "../assets/Carousel_2.jpeg";

export default function Home() {
  const items = [img1, img2, img3, img4];

  return (
    <>
      <Navbar />

      <Carousel
        autoPlay={true}
        interval={3000}
        animation="fade"
        indicators={false}
        navButtonsAlwaysVisible={true}
        swipe={true}
      >
        {items.map((img, i) => (
          <div key={i} className="carousel-container">
            <img src={img} alt={`slide-${i}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>

      <Landing />
      <Services />
      <Initiatives />
      <Funds />
      <ContactForm />
      <Footer />
      <BackToTop />
    </>
  );
}
