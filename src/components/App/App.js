import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Api from '../../utils/Api';

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    Api.getMovies().then(moviesList => {
      setMovies(moviesList.data.movies)
    })
  }, []);

  return (
    <div className="page">
      <Header />
      <Main 
        movies={movies}
      />
      <Footer />
    </div>
  );
}

export default App;
