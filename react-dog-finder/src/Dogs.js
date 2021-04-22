import { Link } from 'react-router-dom';
const Dogs = ({ dogs }) => {
  return (
    <div className='Dogs'>
      {dogs.map((dog) => {
        return (
          <div className='Dogs-card'>
            <h4 className='Dogs-name'>{dog.name}</h4>
            <img className='Dogs-img' src={dog.src} alt={dog.name} />
            <Link to={`/dogs/${dog.name}`}>
              <button className='Dogs-btn'>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dogs;
