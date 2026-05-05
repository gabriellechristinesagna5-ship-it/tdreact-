import React, { useState } from "react";

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "reliability",
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
      id: "respect",
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: "service",
      title: "Service",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: "security",
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, chacun peut contribuer à faire de la communauté Kasa un endroit plus sûr."
    }
  ];

  return (
    <main className="main-about">
      <div className="about-banner">
        <h1>À Propos</h1>
      </div>
      <div className="about-content">
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
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;