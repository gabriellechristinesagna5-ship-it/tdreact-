import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="error-page">
      <h1 className="error-page-number">404</h1>
      <p className="error-page-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error-page-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default NotFound;
