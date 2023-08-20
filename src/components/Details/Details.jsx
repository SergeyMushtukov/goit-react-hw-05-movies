import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import PropTypes from 'prop-types';
import { InfodWrapper } from './Details.styled';

const Details = ({ data, posterBaseUrl }) => {
  const dateRelease = data.release_date.slice(0, 4);
  const genres = data.genres.map(genre => genre.name).join(' ');
  const posterUrl = `${posterBaseUrl}w342${data.poster_path}`;

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <div>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <InfodWrapper>
        <img src={posterUrl} alt={data.title} />
        <div>
          <h1>{`${data.title} (${dateRelease})`}</h1>
          <p>User Score: {`${Math.round(data.vote_average * 10)}`}%</p>
          <h2>Overview</h2>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </InfodWrapper>
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.object.isRequired,
  posterBaseUrl: PropTypes.string.isRequired,
};

export default Details;
