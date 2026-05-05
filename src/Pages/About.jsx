import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import imageAbout from '../assets/image_apropos.png';
import aboutItems from '../components/a-propos.json';

function About() {
  return (
    <section className="main-about">
      <Banner image={imageAbout} dark />

      <div className="collapse-group">
        {aboutItems.map((item) => (
          <div key={item.title} className="collapse-about">
            <Collapse title={item.title}>
              <p className="content">{item.content}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
