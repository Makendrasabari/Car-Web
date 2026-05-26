import React, { useState } from "react";

function Contact() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("Fortune Stealth EV");
  const [message, setMessage] = useState("");

  // Validation states
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      q: "What is the expected delivery timeframe for custom specifications?",
      a: "Bespoke configurations generally require 3 to 4 months. This duration covers custom exterior painting, personalized monograms, leather stitching, and direct home freight delivery."
    },
    {
      q: "Where can I service my solid-state battery powertrain?",
      a: "Any certified regional FORTUNE hub handles scheduled software flashes and cell checks. We also offer standard fly-in tech squads for remote locations under our Concierge plans."
    },
    {
      q: "Are international track day passes included in standard purchases?",
      a: "Standard vehicle acquisitions include two regional circuit allocations. Unrestricted global circuit passes and professional telemetry analysis are reserved for Founders Circle members."
    },
    {
      q: "Can I customize the cabin in leather-free vegan materials?",
      a: "Absolutely. We supply certified ultra-durable hemp weaves and plant-derived suede textiles that mirror Nappa grade comfort without standard leather."
    }
  ];

  const handleFaqToggle = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null); // Close if clicked again
    } else {
      setActiveFaq(index);
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (name.trim().length < 3) {
      tempErrors.name = "Full name must be at least 3 letters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      tempErrors.email = "Please input a valid email coordinate.";
    }

    if (message.trim().length < 10) {
      tempErrors.message = "Message must contain at least 10 letters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset inputs
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      // Hide success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="page-container section">
      {/* Page Header */}
      <div className="section-header animate-fade-in-up">
        <span className="badge">VIP COMMUNICATIONS</span>
        <h1>Connect with Fortune</h1>
        <p>
          Connect directly with our luxury concierges to arrange custom specs, showroom tours, or private racetrack events.
        </p>
      </div>

      {/* Main Interactive Contact Section */}
      <div className="contact-layout animate-fade-in">
        {/* Left Column: Coordinates */}
        <div className="contact-info-column">
          <h2>Showroom HQ</h2>
          <p>
            Visit our state-of-the-art visual pavilion in Chennai, or get in touch through standard paths.
          </p>

          <div className="contact-details-cards">
            <div className="contact-detail-card">
              <div className="contact-detail-icon">📍</div>
              <div className="contact-detail-text">
                <h3>Global Flagship</h3>
                <p>Elegance Tower, Anna Salai, Chennai, TN, India</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon"></div>
              <div className="contact-detail-text">
                <h3>Secure Hotlines</h3>
                <p>+91 98765 43210 / +91 44 2874 9000</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="contact-detail-icon">✉️</div>
              <div className="contact-detail-text">
                <h3>Client Care</h3>
                <p>concierge@fortune-vanguard.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Validated Inquiry Form */}
        <div className="contact-form-panel">
          <h3>Bespoke Inquiry</h3>

          {isSubmitted && (
            <div className="form-success-alert">
              <span>✓</span> Inquiry transmitted successfully! A luxury concierge will contact you within 2 hours.
            </div>
          )}

          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Liam Vance"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="liam@vance-holdings.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Interest Model</label>
                <select value={model} onChange={(e) => setModel(e.target.value)}>
                  <option value="Fortune Stealth EV">Fortune Stealth EV</option>
                  <option value="Fortune Beast V8">Fortune Beast V8</option>
                  <option value="Fortune Prestige Limo">Fortune Prestige Limo</option>
                  <option value="Fortune Sahara Offroad">Fortune Sahara Offroad</option>
                  <option value="Fortune Apex GT">Fortune Apex GT</option>
                  <option value="Fortune Horizon GT">Fortune Horizon GT</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Bespoke Requirements</label>
              <textarea
                rows="4"
                placeholder="Describe your design parameters, custom color formulations, or test requests..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-form-submit">
              Transmit VIP Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Accordion FAQ Grid */}
      <div className="section-header animate-fade-in-up" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <span className="badge">COMMON INQUIRIES</span>
        <h2>Frequently Answered</h2>
        <p>Everything you need to know about commissioning a custom vehicle.</p>
      </div>

      <div className="faq-container animate-fade-in-up">
        <div className="faq-list">
          {faqData.map((faq, idx) => (
            <div
              className={`faq-item ${activeFaq === idx ? "active" : ""}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => handleFaqToggle(idx)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;