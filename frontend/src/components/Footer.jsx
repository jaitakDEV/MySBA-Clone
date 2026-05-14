import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <a href="" target="_blank" rel="noopener noreferrer">
                <p>
                  <i className="fa fa-map-marker-alt"></i>India
                </p>
              </a>
              <a href="tel:+91-7385223242">
                <p>
                  <i className="fa fa-phone"></i>+91-0000000000
                </p>
              </a>
              <a href="">
                <p>
                  <i className="fa fa-envelope"></i>mysba@gmail.com
                </p>
              </a>
              <div className="footer-social">
                <a className="btn btn-custom" href="">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-custom" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <a href="">About Us</a>
              <a href="">Contact Us</a>
              <a href="">Popular Causes</a>
              <a href="">Upcoming Events</a>
              <a href="">Latest Blog</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookies</a>
              <a href="#">Help</a>
              <a href="#">FQAs</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <form name="NewsLetter">
                <input
                  name="subscribe"
                  className="form-control"
                  placeholder="Email goes here"
                  autoComplete="email"
                  required
                />
                <button className="btn btn-custom">Submit</button>
                <h6>Don't worry, we don't spam!</h6>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">THE MySBA</a> | 2026, All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By <a href="">Choyal Innovation</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
