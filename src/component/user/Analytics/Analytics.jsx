import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();

  const handleImageClick = (page) => {
    const pageRoutes = {
      appointment: "/Appointment",
      progress: "/progress",
      medicationtiming: "/Medicine",
    };

    const route = pageRoutes[page];
    if (route) {
      navigate(route);
    }
  };

  const images = [
    {
      src: "public/appointment-bookingpage.jpg",
      alt: "Appointment",
      page: "appointment",
    },
    { src: "public/Progress report -.avif", alt: "Progress", page: "progress" },
    {
      src: "public/timming.avif",
      alt: "Medication Timing",
      page: "medicationtiming",
    },
  ];

  return (
    <div className="main-page-container">
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(image.page)}
          >
            <img src={image.src} alt={image.alt} className="image" />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>

      <style>{`
        .main-page-container {
          text-align: center;
          margin: 50px auto;
          font-family: Arial, sans-serif;
        }

        .image-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .image-item {
          cursor: pointer;
          text-align: center;
          max-width: 33%;
          transition: transform 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
        }

        .image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .image-item p {
          margin-top: 10px;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .image-item {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Analytics;