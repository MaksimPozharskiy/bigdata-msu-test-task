import React from 'react';
import './Main.css';
import '../Table/Table';
import Table from '../Table/Table';
import Pagination from '../Pagintaion/Pagination';

function Main({movies, setIsVisiblePopup, setCurrentIdMovie, hadleDeleteCommentButton}) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [moviesPerPage] = React.useState(4) // You can setting up count of items on page

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovie = movies.slice(firstMovieIndex, lastMovieIndex)
  
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='main'>
      <Table 
        movies={currentMovie}
        setIsVisiblePopup={setIsVisiblePopup}
        setCurrentIdMovie={setCurrentIdMovie}
        hadleDeleteCommentButton={hadleDeleteCommentButton}
      />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Main;