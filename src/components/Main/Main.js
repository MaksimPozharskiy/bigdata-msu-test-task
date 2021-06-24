import './Main.css';
import '../Table/Table';
import Table from '../Table/Table';

function Main({movies}) {
  return (
    <div className="main">
      <Table 
        movies={movies}
      />
    </div>
  );
}

export default Main;