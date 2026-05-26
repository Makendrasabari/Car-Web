import React, { useState } from "react";

function Services() {
  const [activeTier, setActiveTier] = useState("Elite");

  const servicesList = [
    {
      num: "01",
      title: "Bespoke Customization",
      desc: "Work directly with our styling studios to formulate one-of-a-kind paint palettes, customized interior stitching, and rare dashboard woods.",
      link: "/contact"
    },
    {
      num: "02",
      title: "Vanguard Concierge",
      desc: "Our round-the-clock satellite team monitors your vehicle diagnostics in real-time, arranging flying mechanic dispatches if needed.",
      link: "/contact"
    },
    {
      num: "03",
      title: "VIP Track Coaching",
      desc: "Gain private entry to international circuits, supported by personal racing telemetry analysis and professional driving coaches.",
      link: "/contact"
    },
    {
      num: "04",
      title: "Elite Auto-Financing",
      desc: "Tailored high-net-worth credit arrangements, streamlined corporate custom leases, and low-friction trade-in asset programs.",
      link: "/contact"
    }
  ];

  const tiers = {
    Elite: {
      title: "Elite Registry Membership",
      price: "₹5,00,000 / year",
      desc: "Our baseline premium plan, ensuring pristine maintenance, remote battery checks, and VIP showroom privileges.",
      features: [
        "Priority service scheduling (within 24 hours)",
        "Bi-annual master paint detailing",
        "24/7 real-time telemetry diagnostics",
        "Complimentary test vehicles during servicing",
        "Access to regional Fortunr club meetups"
      ],
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=500"
    },
    Founders: {
      title: "Vanguard Founders Circle",
      price: "₹15,00,000 / year",
      desc: "An ultimate concierge layer limited to 100 individuals globally, offering unrestricted engineering support and unique privileges.",
      features: [
        "Unlimited international racetrack bookings",
        "1-on-1 private styling consultation with Vikram Sengupta",
        "Complimentary customized cabin monogram engraving",
        "Guaranteed priority allocation on all new vehicle releases",
        "Private flight concierge transfer for vehicle factory pickups"
      ],
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=500"
    }
  };

  const currentTier = tiers[activeTier];

  return (
    <div className="page-container section">
      {/* Page Header */}
      <div className="section-header animate-fade-in-up">
        <span className="badge">FORTUNR PRIVILEGES</span>
        <h1>Elite Services</h1>
        <p>
          We extend our standard of visual and mechanical mastery beyond manufacturing. Explore bespoke services and VIP tier registries.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid animate-fade-in-up">
        {servicesList.map((srv, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-num">{srv.num}</div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
            <a href={srv.link} className="service-link">
              Inquire <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Interactive Tier Selector Section */}
      <div className="section-header animate-fade-in-up" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <span className="badge">MEMBERSHIPS</span>
        <h2>Vanguard Registries</h2>
        <p>Compare our elite ownership packages and choose your tier of absolute convenience.</p>
      </div>

      <div className="tier-container animate-fade-in">
        <div style={{ textAlign: "center" }}>
          <div className="tier-toggle-wrapper">
            <button
              className={`tier-toggle-btn ${activeTier === "Elite" ? "active" : ""}`}
              onClick={() => setActiveTier("Elite")}
            >
              Elite Registry
            </button>
            <button
              className={`tier-toggle-btn ${activeTier === "Founders" ? "active" : ""}`}
              onClick={() => setActiveTier("Founders")}
            >
              Founders Circle
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="tier-details">
          <div className="tier-info-panel">
            <span className="badge" style={{ background: "rgba(255,255,255,0.03)", borderColor: "var(--border-glass)" }}>
              {activeTier} Access
            </span>
            <h2>{currentTier.title}</h2>
            <div className="tier-price">{currentTier.price}</div>
            <p style={{ marginBottom: "24px" }}>{currentTier.desc}</p>
            
            <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>Exclusive Benefits</h3>
            <ul className="tier-features-list">
              {currentTier.features.map((feat, fidx) => (
                <li key={fidx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="tier-image-panel animate-fade-in">
            <img src={currentTier.image} alt={currentTier.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;