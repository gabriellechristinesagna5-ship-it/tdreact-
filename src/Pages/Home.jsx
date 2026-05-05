import Banner from '../components/Banner';
import DisplayCarts from '../components/DisplayCarts';
import imageHome from '../assets/image_home.png';

function Home() {
  return (
    <section className="main-home">
      <Banner image={imageHome} title="Chez vous, partout et ailleurs" />
      <DisplayCarts />
    </section>
  );
}

export default Home;
