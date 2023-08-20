import { Link } from 'react-router-dom';
import { InfoWrapper } from './MoreInfo.styled';

const MoreInfo = () => {
  return (
    <InfoWrapper>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </InfoWrapper>
  );
};
export default MoreInfo;
