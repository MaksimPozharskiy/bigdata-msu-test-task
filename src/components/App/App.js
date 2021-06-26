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
  const [valuePopupComment, setValuePopupComment] = React.useState('')
  const [currentIdMovie, setCurrentIdMovie] = React.useState(0)


  React.useEffect(() => {
    Api.getMovies().then(moviesList => {
      moviesList.data.movies.forEach((item) => {
        item.comment = '';
      })
      setMovies(moviesList.data.movies);
    })
  }, []);

  function handleSubmit(e, idMovie) {
    e.preventDefault()
    setMovies(movies.map((item) => {
      if (item.id === idMovie) {
        item.comment = valuePopupComment;
        return item;
      }
      return item
    }));
    setValuePopupComment('')
    setIsVisiblePopup(false)
  }
  
  return (
    <>
      <div className='page'>
        <Header />
        <Main 
          movies={movies}
          setIsVisiblePopup={setIsVisiblePopup}
          setCurrentIdMovie={setCurrentIdMovie}
        />
        <Footer />
      </div>
      <Popup 
        isVisiblePopup={isVisiblePopup} 
        setIsVisiblePopup={setIsVisiblePopup}
        valueComment={valuePopupComment}
        setValueComment={setValuePopupComment}
        handleSubmit={handleSubmit}
        currentIdMovie={currentIdMovie}
      />
    </>
  );
}

export default App;
