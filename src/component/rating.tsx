import { FaStar } from 'react-icons/fa';
import '../style/rating.scss';

interface RatingProps {
  score: string | number;
}

export default function Rating({ score }: RatingProps) {
  const rating = Number(score);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`star ${star <= rating ? 'filled' : 'empty'}`}
        />
      ))}
    </div>
  );
}