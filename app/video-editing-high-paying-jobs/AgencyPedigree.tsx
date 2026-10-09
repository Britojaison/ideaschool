import Image from "next/image";

export default function AgencyPedigree() {
  const mentors = [
    { name: "Ajay", role: "Post Lead", image: "/images/mentor_AJAY.webp" },
    { name: "Arjun", role: "Creative Director", image: "/images/mentor_ARJUN.webp" },
    { name: "Chandru", role: "Color & Motion", image: "/images/mentor_CHANDRU.webp" },
    { name: "Paridhi", role: "Commercial Editor", image: "/images/mentor_PARIDHI.webp" },
  ];

  const brands = [
    "/images/netflix.webp",
    "/images/POCO.webp",
    "/images/XIAMO.webp",
    "/images/paytm.webp",
    "/images/moj.webp",
    "/images/MILKY MIST-2.webp",
    "/images/SIG.webp",
    "/images/JLL.webp",
    "/images/heritage.webp",
    "/images/finolex logo.webp",
    "/images/AMAZON.webp",
    "/images/NETFLIX-2.webp",
  ];

  return (
    <section className="agencyPedigreeSection" style={{
      padding: "80px 4vw",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div className="agencyPedigreeInner" style={{
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}>
        {/* Header */}
        <div className="pedigreeHeader" style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px" }}>
          <span className="eyebrow" style={{
            color: "#dafd55",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          }}>
            AGENCY PEDIGREE DIRECT ACCESS
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
            margin: 0
          }}>
            LEARN WITH PEOPLE WHO DO THIS FOR A LIVING
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: 1.5,
            margin: 0,
            maxWidth: "700px"
          }}>
            Not course creators reading slides. Active commercial directors, colorists, and post leads opening their actual production process.
          </p>
        </div>

        {/* Cards */}
        <div className="pedigreeCards" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px"
        }}>
          <div className="pCard" style={{ padding: "32px 24px", backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ color: "#dafd55", fontSize: "24px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>30+ YEARS</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0 }}>Combined global agency experience</p>
          </div>
          <div className="pCard" style={{ padding: "32px 24px", backgroundColor: "#0a0a0a", border: "1px solid rgba(218,253,85,0.4)", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ color: "#dafd55", fontSize: "24px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>WORKING CREATIVES</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0 }}>Commercial practitioners</p>
          </div>
          <div className="pCard" style={{ padding: "32px 24px", backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ color: "#dafd55", fontSize: "24px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>HANDS-ON</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0 }}>You edit during the session</p>
          </div>
          <div className="pCard" style={{ padding: "32px 24px", backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ color: "#dafd55", fontSize: "24px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>DIRECT REVIEW</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", margin: 0 }}>Mentor feedback on your work</p>
          </div>
        </div>

        {/* Mentor Row */}
        <div className="mentorRow" style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          backgroundColor: "#0d0514",
          border: "1px solid rgba(168, 85, 247, 0.2)",
          borderRadius: "8px",
          padding: "24px 32px",
          flexWrap: "wrap"
        }}>
          <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)" }}>
            IN THE ROOM WITH YOU
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            {mentors.map(mentor => (
              <div key={mentor.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden", position: "relative", backgroundColor: "#1a1a1a" }}>
                  <Image src={mentor.image} alt={mentor.name} fill sizes="48px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{mentor.name}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{mentor.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Row */}
        <div className="brandsRowWrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", marginTop: "40px", overflow: "hidden", width: "100%" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
            TRUSTED BY BRANDS SHAPING INDIAN CULTURE
          </span>
          <div className="marqueeContainer" style={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}>
            <div className="marqueeTrack" style={{
              display: "flex",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
              animation: "scroll 30s linear infinite",
              minWidth: "max-content",
              opacity: 0.5,
              filter: "grayscale(100%) contrast(200%)"
            }}>
              {[...brands, ...brands].map((src, i) => (
                <div key={i} style={{ position: "relative", width: "clamp(60px, 8vw, 100px)", height: "40px", flexShrink: 0 }}>
                  <Image src={src} alt="Brand logo" fill sizes="100px" style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - (clamp(40px, 6vw, 80px) / 2))); }
          }
        `}} />
      </div>
    </section>
  );
}
