import { useParams } from 'react-router-dom';

const Dog = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((d) => d.name === name);
  return (
    <div className='Dog'>
      <h1 className='Dog-name'>{dog.name}</h1>
      <img className='Dogs-img' src={dog.src} alt={dog.name} />
      <p>{`${dog.age} years old`}</p>
      <ul>
        {dog.facts.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dog;
