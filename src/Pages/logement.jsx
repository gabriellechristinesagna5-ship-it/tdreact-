import { Navigate, useParams } from 'react-router-dom';
import logements from '../components/logements.json';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Slideshow from '../components/Slideshow';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className="logement-page">
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <div className="logement-page-header">
        <div className="logement-page-header-infos">
          <h1 className="logement-page-header-infos-title">{logement.title}</h1>
          <p className="logement-page-header-infos-subtitle">{logement.location}</p>

          <div className="logement-page-header-infos-tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="logement-page-header-infos-tags-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-page-header-host">
          <div className="logement-page-header-host-infos">
            <p className="logement-page-header-host-infos-name">
              {logement.host.name}
            </p>
            <img
              className="logement-page-header-host-infos-img"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement-page-collapses">
        <div className="logement-page-collapses-content">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>

        <div className="logement-page-collapses-content">
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  );
}

export default Logement;
