import { footer } from "../../../styles";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ ...footer, position: "fixed", bottom: "0", left: "0", width: "100%", zIndex: "10", backgroundColor: "#333", padding: "20px 0", textAlign: "center", color: "white", boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.3)" }}>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "20px", fontWeight: "300" }}>
        &copy; 2023 Company by XYZ | All Rights Reserved | Powered by Force
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <div
          style={{
            backgroundImage: "url(./facebook.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "5vh",
            height: "5vh",
            cursor: "pointer",
            transition: "transform 0.3s ease, filter 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.filter = "brightness(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onClick={() => handleIconClick("https://www.facebook.com")}
        >
          <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "12px", opacity: "0", transition: "opacity 0.3s ease" }}>Facebook</span>
        </div>
        <div
          style={{
            backgroundImage: "url(./twitter.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "5vh",
            height: "5vh",
            cursor: "pointer",
            transition: "transform 0.3s ease, filter 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.filter = "brightness(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onClick={() => handleIconClick("https://www.twitter.com")}
        >
          <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "12px", opacity: "0", transition: "opacity 0.3s ease" }}>Twitter</span>
        </div>
        <div
          style={{
            backgroundImage: "url(./vimeo.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "5vh",
            height: "5vh",
            cursor: "pointer",
            transition: "transform 0.3s ease, filter 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.filter = "brightness(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onClick={() => handleIconClick("https://www.vimeo.com")}
        >
          <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "12px", opacity: "0", transition: "opacity 0.3s ease" }}>Vimeo</span>
        </div>
        <div
          style={{
            backgroundImage: "url(./instagram.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "5vh",
            height: "5vh",
            cursor: "pointer",
            transition: "transform 0.3s ease, filter 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.filter = "brightness(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onClick={() => handleIconClick("https://www.instagram.com")}
        >
          <span style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", color: "white", fontSize: "12px", opacity: "0", transition: "opacity 0.3s ease" }}>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
