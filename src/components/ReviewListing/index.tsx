import ReviewCard from 'components/ReviewCard';
import { Review } from 'types/review';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <main>
        <div className="base-card reviewlisting-container">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
    </main>
  );
};

export default ReviewListing;
