import { ReactComponent as MainImage } from 'assets/images/Desenho.svg';
import Login from './Login';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <div>
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="base-card auth-form-container">
        <Login />
      </div>
    </div>
  );
};

export default Home;
