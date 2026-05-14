import React, { useState } from "react";
import axios from "axios";
import contact from "../assets/contact_us.jpg";
import "../css/contactForm.css";
import { ToastContainer, toast } from "react-toastify";

function ContactForm() {
  const notify = () => toast("Successfully sent message!");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      console.log(response.data);

      setSuccessMessage("✔ Message Sent Successfully!");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);

      setSuccessMessage("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Start */}
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <h3>Get In Touch Touch</h3>
            <h2>Contact for any query</h2>
          </div>

          <div className="contact-img">
            <img src={contact} alt="Contact" />
          </div>

          <div className="contact-form">
            {successMessage && (
              <div className="sent text-success mb-3">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <p className="text-danger">{errors.name}</p>
              </div>

              {/* Email */}
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <p className="text-danger">{errors.email}</p>
              </div>

              {/* Subject */}
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.subject}</p>
              </div>

              {/* Message */}
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                ></textarea>
                <p className="text-danger">{errors.message}</p>
              </div>

              {/* Button */}
              <div>
                <button
                  className="btn btn-custom"
                  type="submit"
                  disabled={loading}
                  onClick={notify}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ToastContainer />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default ContactForm;
