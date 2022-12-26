import { ReactComponent as StarImage } from 'assets/images/Estrela.svg';
import { Review } from 'types/review';
import './styles.css';

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="reviewcard-container">
      <div className="reviewcard-card-user">
        <StarImage />
        <h3>{review.user.name}</h3>
      </div>
      <div className="reviewcard-card-comment">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
