import './Table.css';
import TableRow from '../TableRow/TableRow';

function Table({movies}) {
  return (
    <table className='table'>
      <thead className='table__head'>
      <TableRow 
        id='id'
        urlPoster='poster'
        title='title'
        year='year'
        rating='rating'
        runtime='runtime'
      />
      </thead>
      <tbody className='table__body'>
        {
          movies.map(dataMovie => 
            <TableRow
              key={dataMovie.id}
              id={dataMovie.id}
              urlPoster={dataMovie.medium_cover_image}
              title={dataMovie.title}
              year={dataMovie.year}
              rating={dataMovie.rating}
              runtime={dataMovie.runtime}
              />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;