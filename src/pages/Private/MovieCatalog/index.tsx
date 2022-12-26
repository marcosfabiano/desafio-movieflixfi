import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import MovieLoader from './MovieLoader';
import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="moviecatalog-container">
      <h1>Tela listagem de filmes</h1>

      {isLoading ? (
        <MovieLoader />
      ) : (
        page?.content.map((movie) => (
          <div key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <p>Acessar /movies/{movie.id}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
export default MovieCatalog;
