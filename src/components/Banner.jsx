function Banner({ image, title = '', dark = false }) {
  return (
    <section className="banner">
      <img
        className="banner-img"
        src={image}
        alt="Bannière Kasa"
        style={dark ? { filter: 'brightness(70%)' } : undefined}
      />
      {title ? <h1 className="banner-title">{title}</h1> : null}
    </section>
  );
}

export default Banner;
