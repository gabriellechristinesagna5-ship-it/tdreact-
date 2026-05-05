import logoWhite from '../assets/logo_white.png';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logoWhite} alt="Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
