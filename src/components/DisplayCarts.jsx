import logements from './logements.json';
import Card from './Card';

function DisplayCarts() {
  return (
    <section className="logements-container">
      <ul className="logements-list">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </section>
  );
}

export default DisplayCarts;
