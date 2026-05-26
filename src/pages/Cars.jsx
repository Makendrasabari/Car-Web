import React, { useState } from "react";

function Cars() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCar, setSelectedCar] = useState(null);
  const [leaseTerm, setLeaseTerm] = useState(36); // State for Lease / Finance Estimator
  const [isRevving, setIsRevving] = useState(false);

  // Dynamic mechanical powertrain sound synthesizers via Web Audio API
  const playCarSound = (car) => {
    if (isRevving) return;
    setIsRevving(true);
    
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) {
        setTimeout(() => setIsRevving(false), 1300);
        return;
      }
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const biquadFilter = ctx.createBiquadFilter();
      const gainNode = ctx.createGain();
      
      const now = ctx.currentTime;
      
      if (car.name.includes("Beast V8")) {
        // THUNDEROUS GROWLING V8: Detuned sawtooth oscillators ramped low
        osc1.type = "sawtooth";
        osc2.type = "sawtooth";
        
        osc1.frequency.setValueAtTime(45, now);
        osc1.frequency.linearRampToValueAtTime(170, now + 0.45);
        osc1.frequency.exponentialRampToValueAtTime(45, now + 1.25);
        
        osc2.frequency.setValueAtTime(45.6, now);
        osc2.frequency.linearRampToValueAtTime(171.6, now + 0.45);
        osc2.frequency.exponentialRampToValueAtTime(45.6, now + 1.25);
        
        biquadFilter.type = "lowpass";
        biquadFilter.Q.setValueAtTime(5, now);
        biquadFilter.frequency.setValueAtTime(160, now);
        biquadFilter.frequency.linearRampToValueAtTime(480, now + 0.45);
        biquadFilter.frequency.exponentialRampToValueAtTime(160, now + 1.25);
        
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.28, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
      } else if (car.category.includes("Electric") || car.name.includes("Stealth")) {
        // FUTURISTIC HIGH-TECH ELECTRIC HUM: High pitch windup sine
        osc1.type = "sawtooth";
        osc2.type = "sine";
        
        osc1.frequency.setValueAtTime(55, now);
        osc1.frequency.exponentialRampToValueAtTime(380, now + 0.45);
        osc1.frequency.exponentialRampToValueAtTime(55, now + 1.2);
        
        osc2.frequency.setValueAtTime(110, now);
        osc2.frequency.exponentialRampToValueAtTime(760, now + 0.45);
        osc2.frequency.exponentialRampToValueAtTime(110, now + 1.2);
        
        biquadFilter.type = "lowpass";
        biquadFilter.Q.setValueAtTime(11, now);
        biquadFilter.frequency.setValueAtTime(140, now);
        biquadFilter.frequency.exponentialRampToValueAtTime(1050, now + 0.45);
        biquadFilter.frequency.exponentialRampToValueAtTime(140, now + 1.2);
        
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.16, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.25);
      } else if (car.name.includes("Apex GT")) {
        // SCREAMING HYPERCAR: Ultra-high speed pitch shift
        osc1.type = "sawtooth";
        osc2.type = "sawtooth";
        
        osc1.frequency.setValueAtTime(65, now);
        osc1.frequency.exponentialRampToValueAtTime(450, now + 0.48);
        osc1.frequency.exponentialRampToValueAtTime(65, now + 1.28);
        
        osc2.frequency.setValueAtTime(130, now);
        osc2.frequency.exponentialRampToValueAtTime(900, now + 0.48);
        osc2.frequency.exponentialRampToValueAtTime(130, now + 1.28);
        
        biquadFilter.type = "lowpass";
        biquadFilter.Q.setValueAtTime(9, now);
        biquadFilter.frequency.setValueAtTime(200, now);
        biquadFilter.frequency.exponentialRampToValueAtTime(1300, now + 0.48);
        biquadFilter.frequency.exponentialRampToValueAtTime(200, now + 1.28);
        
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.22, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.3);
      } else {
        // SPORT HYBRID GROWL: Smooth mid-frequency roar
        osc1.type = "sawtooth";
        osc2.type = "sine";
        
        osc1.frequency.setValueAtTime(50, now);
        osc1.frequency.linearRampToValueAtTime(240, now + 0.45);
        osc1.frequency.exponentialRampToValueAtTime(50, now + 1.2);
        
        osc2.frequency.setValueAtTime(25, now);
        osc2.frequency.linearRampToValueAtTime(120, now + 0.45);
        osc2.frequency.exponentialRampToValueAtTime(25, now + 1.2);
        
        biquadFilter.type = "lowpass";
        biquadFilter.Q.setValueAtTime(7, now);
        biquadFilter.frequency.setValueAtTime(120, now);
        biquadFilter.frequency.linearRampToValueAtTime(650, now + 0.45);
        biquadFilter.frequency.exponentialRampToValueAtTime(120, now + 1.2);
        
        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.22, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.25);
      }
      
      osc1.connect(biquadFilter);
      osc2.connect(biquadFilter);
      biquadFilter.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.3);
      osc2.stop(now + 1.3);
      
      setTimeout(() => {
        setIsRevving(false);
      }, 1300);
    } catch (e) {
      console.warn("Audio Context failed", e);
      setIsRevving(false);
    }
  };

  // States for booking form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const carList = [
    {
      name: "Fortune Stealth EV",
      price: "₹85 Lakhs",
      category: "Electric",
      subCategory: "Sedan",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
      tagline: "Electric Silent Luxury Cruise",
      specs: {
        acceleration: "2.6s",
        range: "780 km",
        power: "720 HP",
        topSpeed: "280 km/h",
      },
    },
    {
      name: "Fortune Beast V8",
      price: "₹95 Lakhs",
      category: "Performance",
      subCategory: "SUV",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      tagline: "Untethered V8 Core Authority",
      specs: {
        acceleration: "3.8s",
        range: "650 km",
        power: "650 HP",
        topSpeed: "290 km/h",
      },
    },
    {
      name: "Fortune Prestige Limo",
      price: "₹1.2 Crores",
      category: "Sedan",
      subCategory: "Sedan",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600",
      tagline: "Limousine First-Class Cabin Aura",
      specs: {
        acceleration: "4.5s",
        range: "720 km",
        power: "520 HP",
        topSpeed: "250 km/h",
      },
    },
    {
      name: "Fortune Sahara Offroad",
      price: "₹78 Lakhs",
      category: "Offroad",
      subCategory: "SUV",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600",
      tagline: "Conquer Any Untamed Terrain",
      specs: {
        acceleration: "5.2s",
        range: "700 km",
        power: "480 HP",
        topSpeed: "210 km/h",
      },
    },
    {
      name: "Fortune Apex GT",
      price: "₹3.5 Crores",
      category: "Performance",
      subCategory: "Electric",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600",
      tagline: "Ultimate Aerodynamic Mastery",
      specs: {
        acceleration: "1.85s",
        range: "810 km",
        power: "1400 HP",
        topSpeed: "415 km/h",
      },
    },
    {
      name: "Fortune Horizon GT",
      price: "₹1.1 Crores",
      category: "Sedan",
      subCategory: "Performance",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600",
      tagline: "Unmatched Convertible Freedom",
      specs: {
        acceleration: "3.2s",
        range: "680 km",
        power: "700 HP",
        topSpeed: "310 km/h",
      },
    },
  ];

  const calculateLease = (priceStr, term) => {
    let price = 85;
    if (priceStr.includes("Crores")) {
      price = parseFloat(priceStr.replace(/[^0-9.]/g, "")) * 100;
    } else {
      price = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    }
    const baseMonthly = (price * 100000 * 0.6) / term;
    const interestMonthly = (price * 100000 * 0.08) / 12;
    const totalMonthly = baseMonthly + interestMonthly;

    if (totalMonthly >= 100000) {
      return `₹${(totalMonthly / 100000).toFixed(2)} Lakhs/mo`;
    } else {
      return `₹${(totalMonthly / 1000).toFixed(0)} Thousand/mo`;
    }
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (name && email && date) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setSelectedCar(null);
        // Clear form
        setName("");
        setEmail("");
        setDate("");
      }, 3000);
    }
  };

  // Filter logic
  const filteredCars = carList.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "All" ||
      car.category === activeTab ||
      car.subCategory === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="page-container section">
      <div className="section-header animate-fade-in-up">
        <span className="badge">FORTUNE GARAGE</span>
        <h1>Executive Fleet</h1>
        <p>
          Select from our hand-picked lineup of premium vehicles. Explore
          technical specs and lock in your bespoke test drive session.
        </p>
      </div>

      {/* SEARCH AND FILTERS TAB */}
      <div className="cars-controls animate-fade-in">
        <div className="search-bar-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-bar"
            placeholder="Search by model or feature..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          {["All", "Sedan", "SUV", "Electric", "Performance", "Offroad"].map(
            (tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ),
          )}
        </div>
      </div>

      {/* CARS GRID */}
      <div className="cars-grid animate-fade-in-up">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div className="car-card" key={index}>
              <div className="car-img-container">
                <img src={car.image} alt={car.name} />
                <span className="car-tag">{car.category}</span>
              </div>

              <div className="car-info">
                <div className="car-meta">
                  <span className="car-class">{car.subCategory} Edition</span>
                  <span className="car-price">{car.price}</span>
                </div>

                <h3 className="car-name">{car.name}</h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "15px",
                    flexGrow: "1",
                  }}
                >
                  {car.tagline}
                </p>

                <div className="car-specs-brief">
                  <div className="spec-brief-item">
                    ⚡ <span>{car.specs.acceleration}</span>
                  </div>
                  <div className="spec-brief-item">
                    🔋 <span>{car.specs.range}</span>
                  </div>
                  <div className="spec-brief-item">
                    🐎 <span>{car.specs.power}</span>
                  </div>
                </div>

                <div className="car-card-actions">
                  <button
                    className="btn-card-primary"
                    onClick={() => setSelectedCar(car)}
                  >
                    Book Test Drive
                  </button>
                  <button
                    className="btn-card-secondary"
                    onClick={() => setSelectedCar(car)}
                  >
                    Specifications
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              gridColumn: "1 / -1",
              padding: "50px",
              textAlign: "center",
              border: "1px solid var(--border-glass)",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>
              No vehicles match your filters
            </h3>
            <p>
              Try resetting the category filter or searching for another term.
            </p>
          </div>
        )}
      </div>

      {/* FORTUNE ELITE BUNDLES */}
      <section
        className="section"
        style={{
          borderTop: "1px solid var(--border-glass)",
          marginTop: "60px",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <div className="section-header animate-fade-in-up">
          <span className="badge">UPGRADE PACKAGES</span>
          <h2>Fortune Elite Bundles</h2>
          <p>
            Elevate your fleet commission with premium performance and luxury
            visual packages.
          </p>
        </div>

        <div
          className="bundles-grid animate-fade-in-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          <div
            className="bundle-card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-glass)",
              borderRadius: "20px",
              padding: "30px",
              transition: "all 0.3s ease",
            }}
          >
            <span
              className="badge"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              PERFORMANCE
            </span>
            <h3
              style={{
                fontSize: "1.3rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Carbon Track Package
            </h3>
            <div
              style={{
                fontSize: "1.5rem",
                color: "var(--accent-gold)",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              ₹12 Lakhs
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Forged lightweight carbon wheels, visual carbon active aerodynamic
              elements, and track suspension dampening.
            </p>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                fontSize: "0.85rem",
                color: "var(--text-primary)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <li>✓ Lightweight carbon splitters</li>
              <li>✓ Custom brake cooling ducting</li>
              <li>✓ Advanced launch-control track flash</li>
            </ul>
          </div>

          <div
            className="bundle-card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-glass)",
              borderRadius: "20px",
              padding: "30px",
              transition: "all 0.3s ease",
            }}
          >
            <span
              className="badge"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              LUXURY
            </span>
            <h3
              style={{
                fontSize: "1.3rem",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Zenith Executive Suite
            </h3>
            <div
              style={{
                fontSize: "1.5rem",
                color: "var(--accent-gold)",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              ₹18 Lakhs
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Hand-polished walnut burl panels, ventilated massage chairs in
              Nappa leather, and automated privacy partitions.
            </p>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                fontSize: "0.85rem",
                color: "var(--text-primary)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <li>✓ Dual 15-inch rear executive screens</li>
              <li>✓ Integrated premium champagne chiller</li>
              <li>✓ Automated soundproofing partitions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DETAIL OVERLAY MODAL */}
      {selectedCar && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => {
                setSelectedCar(null);
                setFormSubmitted(false);
              }}
            >
              ✕
            </button>

            <div className="modal-body">
              {/* Left Column: Visuals & Tech Specs */}
              <div className="modal-visuals">
                <span className="badge">{selectedCar.category} Spec</span>
                <h2>{selectedCar.name}</h2>
                <p className="car-class">
                  {selectedCar.subCategory} Elite Platform
                </p>

                <div className="modal-img-wrapper">
                  <img src={selectedCar.image} alt={selectedCar.name} />
                </div>

                <button
                  type="button"
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    background: isRevving ? "var(--gradient-neon)" : "rgba(255,255,255,0.03)",
                    color: isRevving ? "#000" : "var(--accent-gold)",
                    border: "1px solid var(--border-glass-active)",
                    fontFamily: "var(--heading)",
                    fontWeight: "800",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    marginTop: "5px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                    transition: "all 0.3s ease"
                  }}
                  onClick={() => playCarSound(selectedCar)}
                >
                  🔊 {isRevving ? "REVVING HIGH-PERFORMANCE CORE..." : `LISTEN TO ${selectedCar.name.toUpperCase()} ENGINE`}
                </button>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "12px",
                    textAlign: "left",
                  }}
                >
                  Technical Benchmarks
                </h3>
                <div className="modal-specs-list">
                  <div className="modal-spec-card">
                    <div className="label">0-100 km/h</div>
                    <div className="value">
                      {selectedCar.specs.acceleration}
                    </div>
                  </div>
                  <div className="modal-spec-card">
                    <div className="label">Driving Range</div>
                    <div className="value">{selectedCar.specs.range}</div>
                  </div>
                  <div className="modal-spec-card">
                    <div className="label">Peak Output</div>
                    <div className="value">{selectedCar.specs.power}</div>
                  </div>
                  <div className="modal-spec-card">
                    <div className="label">V-Max Speed</div>
                    <div className="value">{selectedCar.specs.topSpeed}</div>
                  </div>
                </div>

                {/* Lease / Finance Estimator */}
                <div
                  className="modal-finance-calculator"
                  style={{
                    marginTop: "24px",
                    paddingTop: "20px",
                    borderTop: "1px solid var(--border-glass)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Lease Estimator
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "15px",
                      textAlign: "left",
                    }}
                  >
                    Adjust lease tenure parameters to calculate bespoke
                    corporate monthly rates.
                  </p>

                  <div
                    className="lease-term-selector"
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    {[24, 36, 48, 60].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`term-btn ${leaseTerm === t ? "active" : ""}`}
                        style={{
                          flex: "1",
                          padding: "8px 0",
                          background:
                            leaseTerm === t
                              ? "var(--accent-gold)"
                              : "rgba(255,255,255,0.03)",
                          color: leaseTerm === t ? "#000" : "#fff",
                          border: `1px solid ${leaseTerm === t ? "var(--accent-gold)" : "var(--border-glass)"}`,
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "600",
                          fontSize: "0.85rem",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() => setLeaseTerm(t)}
                      >
                        {t} Mos
                      </button>
                    ))}
                  </div>

                  <div
                    className="lease-result"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.02)",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: "1px solid var(--border-glass)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      VIP Monthly Estimate:
                    </span>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        color: "var(--accent-gold)",
                      }}
                    >
                      {calculateLease(selectedCar.price, leaseTerm)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Form */}
              <div className="modal-booking-form">
                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <div
                      style={{
                        fontSize: "3rem",
                        color: "var(--accent-gold)",
                        marginBottom: "20px",
                      }}
                    >
                      ✓
                    </div>
                    <h3 style={{ marginBottom: "10px" }}>Test Drive Locked!</h3>
                    <p>
                      Thank you, {name}. A Fortune private concierge will email
                      you at {email} within the next 2 hours to confirm your VIP
                      calendar slot on {date}.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3>Schedule Trial</h3>
                    <p>
                      Enter your contact parameters below to reserve an
                      exclusive test-run with the {selectedCar.name}.
                    </p>

                    <form onSubmit={handleBookSubmit}>
                      <div className="modal-form-group">
                        <label>Your Full Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Alexander Mercer"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="modal-form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          placeholder="alex@fortune-vanguard.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="modal-form-group">
                        <label>Preferred Session Date</label>
                        <input
                          type="date"
                          required
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>

                      <button type="submit" className="btn-book-submit">
                        Request VIP Booking
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cars;
