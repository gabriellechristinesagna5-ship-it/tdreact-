import redStar from '../assets/redstar.png';
import greyStar from '../assets/greystar.png';

function Rating({ rating }) {
  const currentRating = Number(rating);

  return (
    <div className="rating-star" aria-label={`Note ${currentRating} sur 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index + 1 <= currentRating;
        return (
          <img
            key={index}
            className={filled ? 'rating-star-red' : 'rating-star-grey'}
            src={filled ? redStar : greyStar}
            alt=""
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

export default Rating;
