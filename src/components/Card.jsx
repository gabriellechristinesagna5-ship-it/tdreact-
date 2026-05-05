import { Link } from 'react-router-dom';

function Card({ logement }) {
  return (
    <li className="logement">
      <Link to={`/logement/${logement.id}`}>
        <figure className="logement-figure">
          <img
            className="logement-figure-cover"
            src={logement.cover}
            alt={logement.title}
          />
          <figcaption className="logement-figure-figcaption">
            <h2 className="logement-figure-figcaption-title">{logement.title}</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
}

export default Card;
