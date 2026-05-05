import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logementsData from "../components/logements.json";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find(log => log.id === id);
    setLogement(foundLogement);
  }, [id]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const nextImage = () => {
    if (logement && currentImageIndex < logement.pictures.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!logement) {
    return (
      <main className="main-logement">
        <div className="logement-not-found">
          <h2>Logement non trouvé</h2>
          <Link to="/">Retour à l'accueil</Link>
        </div>
      </main>
    );
  }

  const sections = [
    {
      id: "description",
      title: "Description",
      content: logement.description
    },
    {
      id: "equipments",
      title: "Équipements",
      content: logement.equipments.map((equipment, index) => (
        <span key={index} className="equipment-item">
          {equipment}
        </span>
      ))
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <main className="main-logement">
      <div className="logement-carousel">
        <div className="carousel-container">
          <img 
            src={logement.pictures[currentImageIndex]} 
            alt={logement.title}
            className="carousel-image"
          />
          {logement.pictures.length > 1 && (
            <>
              <button 
                className="carousel-arrow prev" 
                onClick={prevImage}
                disabled={currentImageIndex === 0}
              >
                ‹
              </button>
              <button 
                className="carousel-arrow next" 
                onClick={nextImage}
                disabled={currentImageIndex === logement.pictures.length - 1}
              >
                ›
              </button>
              <div className="carousel-counter">
                {currentImageIndex + 1}/{logement.pictures.length}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="logement-info">
        <div className="logement-header">
          <div className="logement-title-section">
            <h1 className="logement-title">{logement.title}</h1>
            <p className="logement-location">{logement.location}</p>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="logement-host-rating">
            <div className="host-info">
              <p className="host-name">{logement.host.name}</p>
              <img 
                src={logement.host.picture} 
                alt={logement.host.name}
                className="host-picture"
              />
            </div>
            <div className="rating">
              {renderStars(parseInt(logement.rating))}
            </div>
          </div>
        </div>

        <div className="logement-details">
          {sections.map((section) => (
            <div key={section.id} className="collapse-section">
              <button 
                className="collapse-header"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <span className={`collapse-arrow ${openSection === section.id ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`collapse-content ${openSection === section.id ? 'open' : ''}`}>
                {section.id === 'description' ? (
                  <p>{section.content}</p>
                ) : (
                  <div className="equipment-list">
                    {section.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Logement;