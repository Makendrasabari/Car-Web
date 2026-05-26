import React from "react";
function About() {
  const timelineData = [
    {
      year: "2012",
      title: "The Spark",
      desc: "Founded in Chennai with a small cohort of elite engineers, drafting custom supercar visual blueprints and tuning frames.",
      side: "left",
    },
    {
      year: "2014",
      title: "Wind Slip Trials",
      desc: "Pioneered advanced computational fluid dynamic sweeps, optimizing wind tunnel metrics for hyper-low drag coefficients.",
      side: "right",
    },
    {
      year: "2017",
      title: "Track Mastery",
      desc: "Unveiled our first bespoke V8 combustion chassis at the national racing circuit, smashing local speed lap records.",
      side: "left",
    },
    {
      year: "2021",
      title: "Clean Horizon",
      desc: "Fully transitioned our primary manufacturing frameworks towards proprietary high-output solid-state electric drivetrains.",
      side: "right",
    },
    {
      year: "2024",
      title: "Solid-State Breakthrough",
      desc: "Received global patents for our circular solid-state battery array, guaranteeing stable 800km runs on a single sweep.",
      side: "left",
    },
    {
      year: "2026",
      title: "Infinite Frontiers",
      desc: "Introducing the flagship Fortune class across 4 continents, merging autopilot neural systems with ultra-premium cabin craft.",
      side: "right",
    },
  ];

  const values = [
    {
      icon: "💎",
      title: "Absolute Perfection",
      desc: "Every single stitch, carbon fiber weave, and alloy dynamic is hand-inspected by master craftsmen to guarantee absolute zero-defect execution.",
    },
    {
      icon: "⚙️",
      title: "Vanguard Tech",
      desc: "We continuously collaborate with aerospace institutes to research thermal battery ventilation, drag co-efficients, and advanced metallurgy.",
    },
    {
      icon: "🤝",
      title: "VIP Centricity",
      desc: "Owning a Fortune enters you into the elite Vanguard Registry: providing 24/7 flying doctors, private track days, and bespoke color tailoring.",
    },
  ];

  const team = [
    {
      name: "Vikram Sengupta",
      role: "Chief Exterior Designer",
      bio: "Formerly designing hypercars in Modena, Vikram translates raw kinetic energy into fluid carbon aerodynamic shapes.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Elena Rostova",
      role: "Lead Powertrain Engineer",
      bio: "Pioneering battery chemistry for 12 years, Elena manages the solid-state architecture powering our extreme torque outputs.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Karthik Raja",
      role: "Director of VIP Operations",
      bio: "Karthik is responsible for the bespoke concierge program, aligning custom design specifications with customer request sets.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const studios = [
    {
      city: "Milan",
      country: "Italy",
      role: "Global Exterior Design",
      desc: "Our Milan Atelier is where aerodynamic sculptures are born. Renowned automotive designers hand-sketch every body panel in a centuries-old palazzo.",
      icon: "🇮🇹",
    },
    {
      city: "Monaco",
      country: "France",
      role: "Performance Engineering",
      desc: "Nestled in the racing heartland, our Monaco lab develops track-tuned suspension, active aero, and advanced telemetry systems.",
      icon: "🇲🇨",
    },
    {
      city: "Chennai",
      country: "India",
      role: "Battery & Manufacturing",
      desc: "Our flagship global manufacturing plant and solid-state battery research hub, home to 2,400 specialized engineers and craftsmen.",
      icon: "🇮🇳",
    },
  ];

  return (
    <div className="page-container section">
      {/* Brand Header */}
      <div className="section-header animate-fade-in-up">
        <span className="badge">FORTUNE LEGACY</span>
        <h1>Bespoke Heritage</h1>
        <p>
          We don't merely assemble components. We sculpt experiences that
          transcend traditional motion, making every drive an event.
        </p>
      </div>

      {/* Mission Glass Container */}
      <div className="about-mission animate-fade-in-up">
        <h2>Our Mission</h2>
        <p>
          "To redefine premium mobility by injecting artistic, bespoke luxury
          with extreme technological vanguards. We exist to empower individuals
          of fine taste to travel without boundaries, surrounded by absolute
          comfort and silent, electric authority."
        </p>
      </div>

      {/* Heritage Timeline */}
      <div
        className="section-header animate-fade-in-up"
        style={{ marginBottom: "30px", marginTop: "60px" }}
      >
        <span className="badge">TIMELINE</span>
        <h2>Milestones of Power</h2>
      </div>

      <div className="timeline animate-fade-in">
        {timelineData.map((item, idx) => (
          <div className={`timeline-item ${item.side}`} key={idx}>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Values */}
      <div
        className="section-header animate-fade-in-up"
        style={{ marginBottom: "50px", marginTop: "60px" }}
      >
        <span className="badge">STANDARDS</span>
        <h2>The Pillars of Fortune</h2>
      </div>

      <div className="values-grid animate-fade-in-up">
        {values.map((val, idx) => (
          <div className="value-card" key={idx}>
            <div className="value-icon">{val.icon}</div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>

      {/* Green Hyperpower Initiative */}
      <div
        className="section-header animate-fade-in-up"
        style={{ marginBottom: "40px", marginTop: "60px" }}
      >
        <span className="badge">SUSTAINABILITY</span>
        <h2>The Green Hyperpower Initiative</h2>
        <p>
          Our commitment to a carbon-neutral future without compromising a
          single horsepower.
        </p>
      </div>

      <div className="green-initiative-grid animate-fade-in-up">
        <div className="green-stat-card">
          <div className="green-stat-icon">🌿</div>
          <div className="green-stat-value">100%</div>
          <div className="green-stat-label">
            Renewable Factory Energy by 2028
          </div>
          <p>
            All production facilities globally are transitioning to solar and
            offshore wind power grids exclusively.
          </p>
        </div>
        <div className="green-stat-card">
          <div className="green-stat-icon">♻️</div>
          <div className="green-stat-value">96%</div>
          <div className="green-stat-label">Circular Battery Recycling</div>
          <p>
            Our solid-state battery chemistry uses bio-derived cathode materials
            fully recyclable at end-of-life.
          </p>
        </div>
        <div className="green-stat-card">
          <div className="green-stat-icon">🌍</div>
          <div className="green-stat-value">Net Zero</div>
          <div className="green-stat-label">Full Scope 1, 2 & 3 by 2030</div>
          <p>
            Comprehensive decarbonization across supply chains, manufacturing,
            and vehicle lifetime emissions.
          </p>
        </div>
      </div>

      {/* Global Design Studios */}
      <div
        className="section-header animate-fade-in-up"
        style={{ marginBottom: "40px", marginTop: "60px" }}
      >
        <span className="badge">GLOBAL ATELIERS</span>
        <h2>World Design Studios</h2>
        <p>
          Our three global creative centers form the creative triangle of
          Fortune's product DNA.
        </p>
      </div>

      <div className="studios-grid animate-fade-in-up">
        {studios.map((studio, idx) => (
          <div className="studio-card" key={idx}>
            <div className="studio-flag">{studio.icon}</div>
            <div className="studio-location">
              <h3>{studio.city}</h3>
              <div className="studio-country">{studio.country}</div>
            </div>
            <div className="studio-role-badge">{studio.role}</div>
            <p>{studio.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div
        className="section-header animate-fade-in-up"
        style={{ marginBottom: "50px", marginTop: "60px" }}
      >
        <span className="badge">VANGUARD TEAM</span>
        <h2>The Sculptors of Speed</h2>
        <p>
          Meet the visionary artists and brilliant minds behind our
          high-performance fleet.
        </p>
      </div>

      <div className="team-grid animate-fade-in-up">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
