import "../css/services.css";

import eventImg from "../assets/Events.jpg";
import courseImg from "../assets/Courses.jpg";
import serviceImg from "../assets/Ser.jpg";
import reportImg from "../assets/Project Reports.jpg";
import memberImg from "../assets/Membership.jpg";
import schemeImg from "../assets/Schemess.jpg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="services-wrapper">
      <div className="services-header">
        <h1>OUR SERVICES</h1>
      </div>

      <section className="services-grid">
        <article className="service-card">
          <img src={eventImg} alt="Events" className="service-img" />
          <h2 className="service-title">Events</h2>
          <p className="service-desc">
            We regularly conduct events and activities designed to develop
            skills and capabilities....
          </p>

          <button className="service-btn">View More</button>
        </article>

        <article className="service-card orange">
          <img src={courseImg} alt="Courses" className="service-img" />
          <h2 className="service-title">Courses</h2>
          <p className="service-desc">
            Courses guide you to roadmap of starting a business and learning new
            skills.
          </p>
          <button className="service-btn">View More</button>
        </article>

        <article className="service-card">
          <img src={serviceImg} alt="Services" className="service-img" />
          <h2 className="service-title">Services</h2>
          <p className="service-desc">
            360 degree services like mentoring, legal support, incubation and
            more.
          </p>
          <button className="service-btn">View More</button>
        </article>

        <article className="service-card">
          <img src={reportImg} alt="Project Report" className="service-img" />
          <h2 className="service-title">Project Report</h2>
          <p className="service-desc">
            Bankable project reports with valuable insights for your business.
          </p>
          <button className="service-btn">View More</button>
        </article>

        <article className="service-card orange">
          <img src={memberImg} alt="Membership" className="service-img" />
          <h2 className="service-title">Membership</h2>
          <p className="service-desc">
            Access to courses, mentors, reports and professionals.
          </p>
          <button className="service-btn">View More</button>
        </article>

        <article className="service-card">
          <img src={schemeImg} alt="Schemes" className="service-img" />
          <h2 className="service-title">Schemes</h2>
          <p className="service-desc">
            Government schemes for entrepreneurship and employment.
          </p>
          <button className="service-btn">View More</button>
        </article>
      </section>
    </div>
  );
};

export default Services;
