import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Api from '../../utils/Api';
import Popup from '../Popup/Popup';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)

  React.useEffect(() => {
    Api.getMovies().then(moviesList => {
      setMovies(moviesList.data.movies)
    })
  }, []);

  return (
    <>
      <div className='page'>
        <Header />
        <Main 
          movies={movies}
          setIsVisiblePopup={setIsVisiblePopup}
        />
        <Footer />
      </div>
      <Popup 
        isVisiblePopup={isVisiblePopup} 
        setIsVisiblePopup={setIsVisiblePopup}
      />
    </>
  );
}

export default App;
