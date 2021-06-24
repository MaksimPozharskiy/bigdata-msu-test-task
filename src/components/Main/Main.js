import './Main.css';
import '../Table/Table';
import Table from '../Table/Table';

function Main({movies, setIsVisiblePopup}) {
  return (
    <div className='main'>
      <Table 
        movies={movies}
        setIsVisiblePopup={setIsVisiblePopup}
      />
    </div>
  );
}

export default Main;