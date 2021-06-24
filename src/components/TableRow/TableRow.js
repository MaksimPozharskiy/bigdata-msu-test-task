import './TableRow.css';

function TableRow({id, urlPoster, title, year, rating, runtime}) {
  return (
    <tr className='table__body-row'>
      <td className='table__body-cell'>{id}</td>
      <td className='table__body-cell'>
        {urlPoster === 'poster' ? 'poster' : <img className='table__poster' src={urlPoster} alt={title} />}
      </td>
      <td className='table__body-cell'>{title}</td>
      <td className='table__body-cell'>{year}</td>
      <td className='table__body-cell'>{rating}</td>
      <td className='table__body-cell'>{runtime}</td>
    </tr>
  );
}

export default TableRow;