import './Main.css';
import '../Table/Table';
import Table from '../Table/Table';

function Main({movies, setIsVisiblePopup, setCurrentIdMovie}) {
  return (
    <div className='main'>
      <Table 
        movies={movies}
        setIsVisiblePopup={setIsVisiblePopup}
        setCurrentIdMovie={setCurrentIdMovie}
      />
    </div>
  );
}

export default Main;