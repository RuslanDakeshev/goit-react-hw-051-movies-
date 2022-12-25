import { useFetchEvent } from 'hooks/useFetchEvent';
import {
  Button,
  Container,
  Img,
  Title,
  Wrapper,
  Year,
  Description,
  Text,
  AddInfo,
} from './MoviePage.styled';

import { useNavigate, useLocation,Outlet } from 'react-router-dom';

export const MoviePage = () => {
  const movie = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  return (
    <>
      <Button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </Button>
      {movie && (
        <Container>
          <Img
            src={getImgUrl(movie.poster_path)}
            alt={movie.title}
            width={350}
          />
          <Wrapper>
            <Title>
              {movie.title} <Year>({movie.release_date.slice(0, 4)})</Year>
            </Title>
            <Description>
              User score: <Text>{movie.vote_average.toFixed(1)}</Text>
            </Description>
            <Description>
              Genres:{' '}
              <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
            </Description>
            <Description>
              Overview: <Text>{movie.overview}</Text>
            </Description>

            <AddInfo to={'cast'} state={location.state}>
              Cast
            </AddInfo>
            <AddInfo to={'reviews'} state={location.state}>
              Reviews
            </AddInfo>
          </Wrapper>
        </Container>
      )}
      <Outlet />
    </>
  );
};
